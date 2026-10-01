import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  Share, 
  Copy, 
  Check, 
  Twitter, 
  Facebook, 
  Clock, 
  Star, 
  Quote, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  HeartPulse, 
  Syringe, 
  FileText, 
  Calendar, 
  Info, 
  History,
  Activity,
  ShieldCheck,
  Building2,
  Wallet,
  Bandage,
  TestTubes,
  ClipboardPlus
} from 'lucide-react';

const pageData = {
  name: "Cura Clinic",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Layanan Kesehatan Terpercaya untuk Keluarga Anda",
  description: "Klinik Dokter Umum dengan pelayanan profesional, ramah, dan fasilitas modern. Kami berkomitmen memberikan penanganan medis terbaik untuk Anda dan keluarga.",
  profileImg: "./cura_clinic_logo.png", 
  heroImg: "./cura_clinic_hero.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/Palangka+Raya/", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id",
    whatsapp: "https://wa.me/6289529605601" 
  },
  about: "Cura Clinic hadir sebagai solusi layanan kesehatan primer yang terjangkau dan berkualitas tinggi. Didukung oleh tenaga medis berpengalaman dan peralatan standar medis modern, kami mengutamakan kenyamanan dan kesembuhan pasien secara holistik.",
  history: "Berdiri sejak tahun 2018, Cura Clinic berawal dari sebuah praktek dokter mandiri kecil. Melihat tingginya kebutuhan masyarakat akan fasilitas kesehatan primer yang memadai, kami berkembang menjadi klinik utama pada tahun 2021 dengan menambahkan berbagai layanan pemeriksaan penunjang.",
  locationHighlights: [
    { text: "Pusat Kota", icon: MapPin },
    { text: "Buka Setiap Hari", icon: Clock },
    { text: "Akses Kursi Roda", icon: ShieldCheck }
  ],
  services: [
    { name: "Konsultasi Medis Umum", desc: "Pemeriksaan dan diagnosis penyakit umum oleh dokter berpengalaman.", icon: "Stethoscope", image: "./gallery_konsultasi.webp" },
    { name: "Pemeriksaan Lab Dasar", desc: "Cek gula darah, asam urat, kolesterol, dan pengambilan sampel darah.", icon: "TestTubes", image: "./gallery_lab.webp" },
    { name: "Perawatan Luka", desc: "Penanganan pembersihan, perawatan luka higienis, dan tindakan medis minor.", icon: "Bandage", image: "./gallery_luka.webp" },
    { name: "Vaksinasi & Imunisasi", desc: "Layanan vaksinasi anak dan dewasa untuk pencegahan serta kekebalan tubuh.", icon: "Syringe", image: "./gallery_vaksin.webp" },
    { name: "Surat Keterangan Sehat", desc: "Penerbitan surat sehat resmi dokter untuk keperluan kerja atau pendidikan.", icon: "FileText", image: "./gallery_surat_sehat.webp" }
  ],
  pricing: [
    { item: "Konsultasi Dokter Umum", price: "Rp 75.000" },
    { item: "Surat Keterangan Sehat", price: "Rp 35.000" },
    { item: "Cek Gula Darah/Asam Urat", price: "Rp 25.000" },
    { item: "Nebulizer (Terapi Uap)", price: "Rp 85.000" },
    { item: "Suntik Vitamin C", price: "Rp 120.000" },
  ],
  faqs: [
    { q: "Apakah Cura Clinic menerima pasien BPJS?", a: "Saat ini kami sedang dalam proses pengajuan kerjasama dengan BPJS. Namun, kami menerima pembayaran tunai, debit, kartu kredit, dan beberapa asuransi swasta mitra." },
    { q: "Bagaimana jam operasional klinik?", a: "Kami melayani setiap hari. Senin - Sabtu: 08.00 - 21.00 WIB. Minggu & Hari Libur: 09.00 - 15.00 WIB." },
    { q: "Apakah harus reservasi sebelum datang?", a: "Anda bisa datang langsung (walk-in). Namun untuk meminimalisir antrean, kami sangat menyarankan Anda melakukan reservasi jadwal via WhatsApp." },
    { q: "Apakah menyediakan layanan panggilan kerumah (Home Care)?", a: "Ya, kami menyediakan layanan Home Care untuk area maksimal radius 5 km dari klinik. Silakan hubungi admin kami untuk informasi lebih lanjut." }
  ],
  testimonials: [
    { name: "Andi Pratama", rating: 5, text: "Dokternya sangat ramah dan sabar menjelaskan kondisi penyakit. Ruang tunggunya bersih dan nyaman." },
    { name: "Siti Nurhaliza", rating: 5, text: "Pelayanan cepat tanggap. Suster dan admin pendaftaran sangat membantu saat anak saya demam tinggi malam-malam." },
    { name: "Budi Santoso", rating: 4, text: "Fasilitas lengkap untuk ukuran klinik umum. Harga konsultasinya juga sangat terjangkau dibanding rumah sakit." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const service = formData.get('service');
    const symptoms = formData.get('symptoms');
    
    const waText = `Halo Admin ${pageData.name}, saya ingin membuat janji temu.%0A%0A*Nama Pasien:* ${name}%0A*Tanggal Kunjungan:* ${date}%0A*Layanan:* ${service}%0A*Keluhan/Catatan:* ${symptoms}%0A%0AMohon konfirmasi jadwalnya. Terima kasih.`;
    const waUrl = `https://wa.me/${pageData.phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const renderServiceIcon = (iconName) => {
    const props = { size: 20, className: "text-[#7189D8]" };
    switch(iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Syringe': return <Syringe {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Bandage': return <Bandage {...props} />;
      case 'TestTubes': return <TestTubes {...props} />;
      case 'ClipboardPlus': return <ClipboardPlus {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F8FAFC; 
          color: #0F172A;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
          
        /* Custom gradient for blue */
        .bg-blue-gradient {
          background: linear-gradient(135deg, #7189D8 0%, #1562A8 100%);
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#F8FAFC] min-h-screen overflow-hidden pb-32">
        
        {}
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6 bg-slate-900">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-slate-900/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-slate-900/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center"
            />
            {/* Menggunakan gradient biru gelap sesuai logo */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1562A8] via-[#1562A8]/85 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-40">
            <div className="w-32 h-32 rounded-full p-2 bg-white/10 backdrop-blur-md mb-6 shadow-2xl border border-white/40 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile Logo" 
                className="w-full h-full rounded-full object-contain p-2 bg-white"
              />
            </div>

            <span className="px-3 py-1 bg-[#EEF2FF] text-[#1562A8] text-[10px] font-bold rounded-full mb-3 tracking-widest uppercase shadow-sm">
              Klinik Dokter Umum
            </span>
            <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-blue-50 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.title}
            </p>

            <div className="flex gap-3 w-full max-w-[280px] mb-4">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
            </div>

            <a 
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-[280px] flex items-center justify-center gap-2 py-3 mb-8 rounded-2xl bg-[#7189D8] hover:bg-[#5b72bc] transition-all text-white shadow-sm text-sm font-bold border border-[#7189D8]/50"
            >
              <MapPin size={18} /> Lokasi Klinik
            </a>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-white text-[#1562A8] rounded-2xl font-bold text-[14px] tracking-wide hover:shadow-lg transition-all"
            >
              Buat Janji Temu
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-6 px-6 bg-white border-b border-slate-100 shadow-sm relative z-10 -mt-4 rounded-t-[24px]">
          <div className="flex flex-wrap justify-center gap-2 w-full max-w-md mx-auto">
            {pageData.locationHighlights.map((hl, idx) => {
              const Icon = hl.icon;
              return (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[11px] text-slate-700 font-medium">
                  <Icon size={14} className="text-[#7189D8]" />
                  {hl.text}
                </span>
              );
            })}
          </div>
        </section>

        {/* TENTANG KAMI & SEJARAH */}
        <section className="py-10 px-6 bg-slate-50">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#EEF2FF] rounded-lg">
                <Info size={20} className="text-[#7189D8]" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-[13px] leading-relaxed text-justify">
              {pageData.about}
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-[#EEF2FF] rounded-lg">
                <History size={20} className="text-[#7189D8]" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Sejarah Klinik</h2>
            </div>
            <p className="text-slate-600 text-[13px] leading-relaxed text-justify">
              {pageData.history}
            </p>
          </div>
        </section>

        {/* KATALOG & GALERI LAYANAN */}
        <section className="py-12 px-6 bg-white border-y border-slate-100">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="text-[#7189D8] font-bold text-xs tracking-wider uppercase mb-1">Galeri & Layanan</span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Dokumentasi Pelayanan</h2>
            <p className="text-slate-500 text-xs mt-1">Foto dokumentasi asli penanganan medis di Cura Clinic</p>
            <div className="w-12 h-1 bg-[#7189D8] rounded-full mt-3"></div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-6 px-6">
            {pageData.services.map((srv, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[270px] flex flex-col bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#7189D8]/30 hover:shadow-md transition-all group overflow-hidden">
                <div 
                  className="w-full h-[155px] bg-slate-100 overflow-hidden relative cursor-pointer"
                  onClick={() => setPreviewImage(srv.image)}
                  title="Klik untuk memperbesar foto"
                >
                  <img 
                    src={srv.image} 
                    alt={srv.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                    {renderServiceIcon(srv.icon)}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-slate-900/60 backdrop-blur-md rounded-lg text-white text-[10px] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Lihat Foto
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-slate-900 mb-2 leading-tight">{srv.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HARGA LAYANAN */}
        <section className="py-10 px-6 bg-slate-50">
           <div className="mb-6 flex items-center gap-3">
              <div className="p-2.5 bg-white shadow-sm border border-slate-200 rounded-xl">
                <Wallet size={20} className="text-[#7189D8]" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Estimasi Biaya</h2>
                <p className="text-slate-500 text-xs mt-0.5">Transparan dan terjangkau.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-2">
              <ul className="divide-y divide-slate-100">
                {pageData.pricing.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center p-4">
                    <span className="text-[13px] text-slate-700 font-medium">{item.item}</span>
                    <span className="text-[14px] font-bold text-[#1562A8]">{item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-slate-50 text-center text-[10px] text-slate-400 italic rounded-xl mt-2">
                *Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Harga belum termasuk obat.
              </div>
            </div>
        </section>

        {/* LOKASI */}
        <section className="py-10 px-6 bg-white border-y border-slate-100">
           <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-xl font-extrabold text-slate-900">Lokasi Klinik</h2>
            <p className="text-slate-500 text-xs">{pageData.address}</p>
          </div>
          
          <div className="w-full bg-slate-100 rounded-3xl h-48 flex flex-col items-center justify-center border border-slate-200 overflow-hidden relative shadow-inner">
            <MapPin size={40} className="text-slate-300 mb-2" />
            <span className="text-slate-400 text-xs font-medium">Peta Interaktif</span>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
               <span className="bg-[#0f172a] text-white text-xs px-4 py-2 rounded-full font-bold">Buka di Google Maps</span>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 px-6 bg-slate-50">
          <div className="mb-8 text-center flex flex-col items-center">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Tanya Jawab (FAQ)</h2>
            <p className="text-slate-500 text-xs mt-2">Pertanyaan umum seputar layanan klinik kami.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-bold text-[13px] text-slate-800 pr-4">{faq.q}</span>
                  {activeFAQ === index ? (
                    <ChevronUp size={18} className="text-[#7189D8] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-4 pb-4 pt-1 text-[12px] text-slate-600 leading-relaxed border-t border-slate-100 transition-all duration-300 ${activeFAQ === index ? 'block' : 'hidden'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-12 px-6 bg-white border-y border-slate-100">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#7189D8]" size={22} />
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Kata Pasien Kami</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-slate-50 p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#eab308] text-[#eab308]" />
                  ))}
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#1562A8] font-bold text-xs">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[12px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6 bg-[#0f172a]">
          <div className="bg-white rounded-[2rem] p-7 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#EEF2FF] opacity-50 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-6 text-center">
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">Buat Janji Temu</h2>
              <p className="text-slate-500 text-xs">Isi form untuk reservasi jadwal dokter via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide ml-1">Nama Pasien</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7189D8] focus:ring-1 focus:ring-[#7189D8] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide ml-1">Tanggal Kunjungan</label>
                <input 
                  type="date" 
                  name="date" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7189D8] focus:ring-1 focus:ring-[#7189D8] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide ml-1">Layanan Utama</label>
                <select 
                  name="service" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#7189D8] focus:ring-1 focus:ring-[#7189D8] transition-all"
                >
                  <option value="">Pilih layanan...</option>
                  <option value="Konsultasi Medis Umum">Konsultasi Medis Umum</option>
                  <option value="Pemeriksaan Lab Dasar">Pemeriksaan Lab Dasar</option>
                  <option value="Perawatan Luka">Perawatan Luka</option>
                  <option value="Vaksinasi / Imunisasi">Vaksinasi / Imunisasi</option>
                  <option value="Surat Keterangan Sehat">Surat Keterangan Sehat</option>
                  <option value="Lainnya">Lainnya / Belum Yakin</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wide ml-1">Keluhan Singkat (Opsional)</label>
                <textarea 
                  name="symptoms" 
                  rows={2}
                  placeholder="Cth: Demam sejak 2 hari, batuk kering..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7189D8] focus:ring-1 focus:ring-[#7189D8] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] text-white font-bold text-[13px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors shadow-md border border-[#1da851]"
              >
                Kirim Pesan WhatsApp
                <MessageCircle size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-10 text-center flex flex-col items-center justify-center mx-6 bg-white border-t border-slate-200 mt-4">
          <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain rounded-lg" />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-800 text-[15px]">{pageData.name}</span>
            <span className="max-w-[250px] leading-relaxed">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#7189D8] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl text-white shadow-[0_10px_40px_rgba(15,23,42,0.4)] active:scale-[0.98] transition-all"
          >
            <div className="flex flex-col text-left">
              <span className="font-bold text-[13px] text-white">Butuh Dokter?</span>
              <span className="text-[10px] text-slate-400">Buat janji temu sekarang</span>
            </div>
            <div className="bg-[#7189D8] text-white p-2 rounded-xl">
              <Calendar size={18} className="stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-6 flex flex-col items-center justify-center mb-6 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[64px] h-[64px] rounded-full border-2 border-white shadow-md mb-3 object-contain p-1 bg-white" />
              <h4 className="text-slate-900 font-bold text-base text-center tracking-tight">Klinik Kesehatan Anda</h4>
              <p className="text-slate-500 text-xs mt-1 text-center font-medium max-w-[80%]">{pageData.title}</p>
            </div>

            <div className="flex justify-center gap-4 pb-2">
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={copyToClipboard}
                  className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={22} className="text-green-600" /> : <Copy size={22} />}
                </button>
                <span className="text-[10px] font-semibold text-slate-600">Salin Tautan</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={22} />
                </button>
                <span className="text-[10px] font-semibold text-slate-600">Twitter</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank')}
                  className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={22} className="fill-current" />
                </button>
                <span className="text-[10px] font-semibold text-slate-600">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW LIGHTBOX */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-[460px] w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              aria-label="Tutup"
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/60 hover:bg-slate-900/80 backdrop-blur-md rounded-full text-white transition-all shadow-md"
            >
              <X size={18} />
            </button>
            <img 
              src={previewImage} 
              alt="Galeri Preview" 
              className="w-full h-auto rounded-2xl object-cover max-h-[75vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}