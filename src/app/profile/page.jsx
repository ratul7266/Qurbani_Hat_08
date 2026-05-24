"use client";

import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const getInitials = (n) =>
    n.trim().split(/\s+/).map((w) => w[0]?.toUpperCase() || "").slice(0, 2).join("") || "?";

  const validateEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const isFormValid = name.trim().length >= 2 && validateEmail(email);

  const handleBlurEmail = () => {
    if (email && !validateEmail(email)) {
      setErrors((e) => ({ ...e, email: "Please enter a valid email address" }));
    } else {
      setErrors((e) => ({ ...e, email: "" }));
    }
  };

  const handleSave = () => {
    if (!isFormValid) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("profile", JSON.stringify({ name, email, image }));
    }
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="min-h-max max-w-md mx-auto py-10">
      {/* Avatar preview card */}
      <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center overflow-hidden bg-white shrink-0">
          {image ? (
            <img src={image} alt="avatar" className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }} />
          ) : (
            <span className="text-2xl font-medium text-gray-400">{getInitials(name)}</span>
          )}
        </div>
        <div>
          <p className="font-medium text-gray-800">{name || "Your name"}</p>
          <p className="text-sm text-gray-400">{email || "your@email.com"}</p>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="mb-4 flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-lg px-4 py-2 text-sm font-medium">
          ✓ Profile saved successfully
        </div>
      )}

      {/* Name */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <label className="text-sm text-gray-500">Full name</label>
          <span className="text-xs text-gray-300">{name.length}/50</span>
        </div>
        <input type="text" placeholder="e.g. Rahim Uddin" maxLength={50}
          className="input input-bordered w-full"
          value={name} onChange={(e) => setName(e.target.value)} />
        {name.trim().length > 0 && name.trim().length < 2 && (
          <p className="text-xs text-red-500 mt-1">Name must be at least 2 characters</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="text-sm text-gray-500 mb-1 block">Email address</label>
        <input type="email" placeholder="e.g. rahim@gmail.com"
          className={`input input-bordered w-full ${errors.email ? "border-red-400" : ""}`}
          value={email}
          onChange={(e) => { setEmail(e.target.value); setErrors((err) => ({ ...err, email: "" })); }}
          onBlur={handleBlurEmail} />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Image URL */}
      <div className="mb-6">
        <label className="text-sm text-gray-500 mb-1 block">Profile image URL</label>
        <input type="url" placeholder="https://example.com/photo.jpg"
          className="input input-bordered w-full"
          value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <button onClick={handleSave} disabled={!isFormValid}
        className="btn bg-green-600 hover:bg-green-700 text-white w-full disabled:opacity-50 disabled:cursor-not-allowed">
        Save profile
      </button>
    </div>
  );
};

export default ProfilePage;