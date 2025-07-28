'use client';

import { useState } from "react";

export default function Forms() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:gustavocortezbrito@gmail.com?subject=Mensagem de ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AContato: ${form.email}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="flex items-center justify-center px-6 text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
        <h2 className="text-3xl font-bold text-center">Entre em contato</h2>

        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-gray-600 focus:outline-none focus:border-purple-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-gray-600 focus:outline-none focus:border-purple-500"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Sua mensagem"
          required
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-[#1c1c1c] border border-gray-600 focus:outline-none focus:border-purple-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded font-semibold hover:opacity-90 transition hover:cursor-pointer"
        >
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}
