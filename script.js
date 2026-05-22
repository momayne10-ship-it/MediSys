// hero.js - الإصدار النهائي بدون أيقونات في الأزرار وتبسيط إشعار الفيديو
(function() {
    // تأثير تمرير النافبار
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 80) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // التنقل السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swal === 'undefined') {
        console.error('SweetAlert2 لم يتم تحميلها');
        return;
    }

    const swalConfig = {
        borderRadius: '32px',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'swal-confirm-btn',
            cancelButton: 'swal-cancel-btn',
            popup: 'swal-rounded-popup',
            title: 'swal-title',
            htmlContainer: 'swal-html',
            icon: 'swal-icon'
        },
        backdrop: true,
        allowOutsideClick: false
    };

    // === زر "مشاهدة العرض" ===
    const videoBtn = document.getElementById('demoVideoBtn');
    if (videoBtn) {
        videoBtn.removeEventListener('click', handleVideoClick);
        videoBtn.addEventListener('click', handleVideoClick);
    }

    function handleVideoClick(e) {
        e.preventDefault();
        Swal.fire({
            ...swalConfig,
            icon: 'info',
            title: 'فيديوهات تعريفية قريباً',
            html: `<p style="font-size: 1rem; line-height: 1.6;">نعمل على إعداد مجموعة من الفيديوهات الاحترافية لشرح نظام MediSys. سيتم إعلانها قريباً.</p>`,
            confirmButtonText: 'ابقى على اطلاع',
            showCancelButton: false,
            timer: 5000,
            timerProgressBar: true
        });
    }

    // === أزرار "تجربة مجانية" ===
    const trialButtons = document.querySelectorAll('#freeTrialBtnHero, #freeTrialBtnHero2');
    trialButtons.forEach(btn => {
        btn.removeEventListener('click', handleTrialClick);
        btn.addEventListener('click', handleTrialClick);
    });

    function handleTrialClick(e) {
        e.preventDefault();
        Swal.fire({
            ...swalConfig,
            icon: 'info',
            title: 'نسخة تجريبية',
            html: `
                <p style="margin-bottom: 0.5rem;">نعمل حالياً على توفير رابط تحميل مباشر للنسخة التجريبية المجانية.</p>
                <p style="font-size: 0.95rem; color: #4a627a;">بدلاً من ذلك، يمكنك التواصل مع فريق الدعم للحصول على نسخة تجريبية مخصصة لعيادتك.</p>
            `,
            showCancelButton: true,
            confirmButtonText: 'تواصل عبر واتساب',
            cancelButtonText: 'إلغاء',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const phone = '0667123987';
                const message = encodeURIComponent('السلام عليكم، أرغب في الحصول على نسخة تجريبية من نظام MediSys لإدارة العيادات. أرجو توجيهي إلى الخطوات المناسبة. شكراً.');
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }
        });
    }
});

// تفعيل الحركة عند التمرير لبطاقات الميزات (كما في script.js الأصلي)
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.feature-premium-box').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// تأثير ظهور البطاقات عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.feature-premium-box').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    if (aboutSection) {
        aboutSection.style.opacity = '0';
        aboutSection.style.transform = 'translateY(20px)';
        aboutSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(aboutSection);
    }
});

// pricing.js - تعديل أزرار القسم بحواف دائرية وزر تواصل عبر واتساب
document.addEventListener('DOMContentLoaded', function() {
    // زر نسخة سطح المكتب
    const desktopBtn = document.getElementById('desktopTrialBtn');
    if (desktopBtn) {
        desktopBtn.addEventListener('click', () => {
            Swal.fire({
                icon: 'info',
                title: 'نسخة تجريبية',
                text: 'نحن نعمل على توفير رابط مباشر لتحميل نسخة مجانية. بدلاً من ذلك، يمكنك التواصل معنا للحصول على واحدة.',
                showCancelButton: true,
                confirmButtonText: 'تواصل عبر واتساب',
                cancelButtonText: 'إلغاء',
                confirmButtonColor: '#2C7DA0',
                cancelButtonColor: '#9e9e9e',
                reverseButtons: true,
                customClass: {
                    popup: 'rounded-3xl',
                    confirmButton: 'rounded-full px-6 py-2',
                    cancelButton: 'rounded-full px-6 py-2'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const phone = '0667123987';
                    const message = encodeURIComponent('السلام عليكم، أرغب في الحصول على نسخة تجريبية من نظام ميدي سيس الطبي');
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                }
            });
        });
    }

    // زر النسخة السحابية (اطلب العرض)
    const cloudBtn = document.getElementById('cloudRequestBtn');
    if (cloudBtn) {
        cloudBtn.addEventListener('click', () => {
            Swal.fire({
                icon: 'question',
                title: 'طلب عرض للنسخة السحابية',
                text: 'سيتم تحويلك إلى محادثة واتساب مع فريق المبيعات لتقديم عرض مناسب. هل تريد المتابعة؟',
                showCancelButton: true,
                confirmButtonText: 'تواصل عبر واتساب',
                cancelButtonText: 'إلغاء',
                confirmButtonColor: '#2C7DA0',
                cancelButtonColor: '#9e9e9e',
                reverseButtons: true,
                customClass: {
                    popup: 'rounded-3xl',
                    confirmButton: 'rounded-full px-6 py-2',
                    cancelButton: 'rounded-full px-6 py-2'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    const phone = '0667123987';
                    const message = encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن النسخة السحابية لنظام ميدي سيس وأريد عرضاً مناسباً');
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                }
            });
        });
    }
});

// ========== FAQ ACCORDION ==========
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // إغلاق الباقي (اختياري، لفتح واحد فقط)
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // افتح أول سؤال بشكل افتراضي (اختياري)
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});

// تأثير ظهور بطاقة القائد عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const leaderCard = document.querySelector('.team-leader-card');
    const footer = document.querySelector('.team-footer-pro');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    if (leaderCard) {
        leaderCard.style.opacity = '0';
        leaderCard.style.transform = 'translateY(20px)';
        leaderCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(leaderCard);
    }
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(20px)';
        footer.style.transition = 'opacity 0.5s ease, transform 0.5s ease 0.2s';
        observer.observe(footer);
    }
});

// ========== تعديل أيقونات التواصل الاجتماعي في الفوتر ==========
document.addEventListener('DOMContentLoaded', function() {
    // استهداف أيقونات فيسبوك، انستغرام، تيك توك فقط
    const socialIcons = document.querySelectorAll('.footer-social a');
    
    socialIcons.forEach(icon => {
        // نتحقق من أن الأيقونة ليست تيليغرام
        const isTelegram = icon.querySelector('.fa-telegram') !== null;
        
        if (!isTelegram) {
            icon.addEventListener('click', function(e) {
                e.preventDefault(); // منع الانتقال إلى الرابط
                Swal.fire({
                    icon: 'info',
                    title: '📢 قريباً',
                    text: 'نعمل على إطلاق صفحاتنا الرسمية قريباً. كونوا معنا، فالمفاجآت قادمة ⚡',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor: '#2C7DA0',
                    background: '#fff',
                    customClass: {
                        popup: 'rounded-3xl',
                        confirmButton: 'rounded-full px-6'
                    },
                    timer: 4000,
                    timerProgressBar: true
                });
            });
        }
    });
});

// تنبيه عند النقر على واتساب (اختياري)
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function(e) {
        // إذا أردت منع التوجيه المباشر وإظهار SweetAlert
        // e.preventDefault();
        // Swal.fire({
        //     icon: 'success',
        //     title: 'جاري التحويل',
        //     text: 'سيتم فتح محادثة واتساب مع فريق الدعم.',
        //     confirmButtonText: 'حسناً',
        //     confirmButtonColor: '#25D366'
        // });
    });
}