import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, ShoppingBag, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signin',
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { signUp, signIn, signInWithGoogle } = useAuth();

  /* ---------------- Sync initial mode ---------------- */
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  /* ---------------- Password validation ---------------- */
  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
  };

  const isPasswordValid = Object.values(passwordChecks).every(Boolean);

  /* ---------------- Helpers ---------------- */
  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess(false);
  };

  const switchMode = (newMode: 'signin' | 'signup') => {
    resetForm();
    setMode(newMode);
  };

  /* ---------------- Sign Up ---------------- */
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!isPasswordValid) {
      setError('Password does not meet requirements');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    const { error } = await signUp(email.trim(), password, fullName.trim());
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        switchMode('signin');
      }, 2000);
    }
  };

  /* ---------------- Sign In ---------------- */
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    const { error } = await signIn(email.trim(), password);
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      resetForm();
      onClose();
    }
  };

  if (!isOpen) return null;

  /* ---------------- Success screen ---------------- */
  if (success && mode === 'signup') {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Account Created
          </h2>
          <p className="text-gray-600">
            Check your email to verify your account.
          </p>
        </div>
      </div>
    );
  }

  /* ---------------- Modal ---------------- */
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">ShopLux</span>
          </div>

          {/* Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            {(['signin', 'signup'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => switchMode(tab)}
                className={`flex-1 py-2 rounded-md font-medium transition-all ${
                  mode === tab
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                {tab === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* ---------- FORMS ---------- */}
          {mode === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  aria-label="Toggle password"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <button
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 border rounded-lg"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-3 border rounded-lg"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </button>
            </form>
          )}

          {/* ---------- SOCIAL LOGIN ---------- */}
          <div className="mt-6">
            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full py-2.5 border rounded-lg hover:bg-gray-50"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
