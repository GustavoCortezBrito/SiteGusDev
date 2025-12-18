'use client';

import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

export default function Forms() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      alert('Por favor, preencha seu nome.');
      return false;
    }
    if (!form.email.trim()) {
      alert('Por favor, preencha seu email.');
      return false;
    }
    if (!form.message.trim()) {
      alert('Por favor, descreva seu projeto.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // 1. Preparar mensagem do WhatsApp
    const whatsappMessage = `Olá Gustavo! 👋

Meu nome é *${form.name}* e tenho interesse em desenvolver um projeto.

*DETALHES DO PROJETO:*
${form.message}

*DADOS PARA CONTATO:*
📧 Email: ${form.email}

Podemos conversar sobre orçamento e prazo?`;

    // 2. Enviar email automático via FormSubmit (gratuito, sem configuração)
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('message', form.message);
      formData.append('_subject', `🚨 NOVO LEAD - ${form.name}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      // Adicionar configurações para funcionar em qualquer domínio
      formData.append('_next', window.location.origin + '/#contact');
      formData.append('_autoresponse', 'Obrigado pelo contato! Vou responder em breve no WhatsApp.');

      fetch('https://formsubmit.co/gustavocortezdev@gmail.com', {
        method: 'POST',
        body: formData
      }).catch(error => console.log('Erro ao enviar email:', error));

    } catch (error) {
      console.log('Erro ao enviar email:', error);
    }

    // 3. Abrir WhatsApp
    const whatsappUrl = `https://wa.me/5517981404761?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // 4. Feedback visual
    alert('✅ Redirecionando para WhatsApp e enviando notificação por email!');
    
    // 5. Limpar formulário
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center px-6 text-white w-full">
      <div className="max-w-7xl w-full">
        <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para decolar seu negócio?</h2>
          <p className="text-gray-400 text-lg">
            <span className="text-purple-400 font-semibold">Resposta em até 2 horas!</span> Ao enviar, você será redirecionado 
            para o <span className="text-green-400 font-semibold">WhatsApp</span> e eu receberei uma 
            <span className="text-purple-400 font-semibold"> notificação por email</span> para responder rapidamente.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
              Nome completo
            </label>
            <div className="relative">
              <FaUser className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused.name ? 'text-purple-400' : 'text-gray-500'}`} />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Como você se chama?"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, name: true })}
                onBlur={() => setIsFocused({ ...isFocused, name: false })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#1c1c1c] border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              E-mail
            </label>
            <div className="relative">
              <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused.email ? 'text-purple-400' : 'text-gray-500'}`} />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#1c1c1c] border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
          </div>

          {/* Mensagem */}
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Descreva seu projeto: que tipo de site precisa? Qual o objetivo? Tem prazo específico? Quanto mais detalhes, melhor posso te ajudar!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={() => setIsFocused({ ...isFocused, message: true })}
              onBlur={() => setIsFocused({ ...isFocused, message: false })}
              className={`w-full px-4 py-3 rounded-lg bg-[#1c1c1c] border transition-all focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none ${isFocused.message ? 'border-purple-500' : 'border-gray-700'}`}
            ></textarea>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg shadow-purple-500/20"
          >
            <FaWhatsapp />
            <FaPaperPlane />
            Enviar Projeto
          </button>
          
          {/* Explicação */}
          <p className="text-center text-sm text-gray-400">
            <FaWhatsapp className="inline text-green-400 mr-1" />
            Abre WhatsApp + 
            <FaEnvelope className="inline text-purple-400 mx-1" />
            Notifica por email
          </p>
        </form>

        {/* Info adicional */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-green-400 font-semibold">💬 Prefere conversar direto?</span><br/>
            Me chame no{" "}
            <a 
              href="https://wa.me/5517981404761" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition font-medium"
            >
              WhatsApp
            </a>
            {" "}ou{" "}
            <a 
              href="https://www.instagram.com/gustavocortez.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition font-medium"
            >
              Instagram
            </a>
            {" "}para uma conversa mais rápida!
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
