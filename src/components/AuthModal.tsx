import React, { useState } from 'react';
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

  const {
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGitHub,
  } = useAuth();

  if (!isOpen) return null;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password, fullName);
    setLoading(false);

    if (error) setError(error.message);
    else {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setMode('signin');
      }, 2000);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) setError(error.message);
    else onClose();
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl text-center">
          <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold">Account created</h2>
          <p className="text-gray-600">Check your email to verify.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <div className="flex items-center justify-center gap-2 mb-6">
          <ShoppingBag className="text-purple-600" />
          <span className="font-bold text-lg">ShopLux</span>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded mb-4 flex gap-2">
            <AlertCircle /> {error}
          </div>
        )}

        {mode === 'signin' ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full border p-3 rounded pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button
              className="w-full bg-purple-600 text-white py-3 rounded"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full border p-3 rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border p-3 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              className="w-full bg-purple-600 text-white py-3 rounded"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>
        )}

        {/* OAuth */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={signInWithGoogle}
            className="border py-2 rounded"
          >
            Google
          </button>
          <button
            onClick={signInWithGitHub}
            className="border py-2 rounded"
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
