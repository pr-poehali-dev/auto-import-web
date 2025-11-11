import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = document.querySelectorAll('[data-section]');
      const windowHeight = window.innerHeight;
      const newVisible = new Set<string>();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) newVisible.add(sectionId);
        }
      });

      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cars = [
    {
      id: 1,
      name: 'Toyota Camry 2024',
      price: 'от 2 850 000 ₽',
      image: 'https://cdn.poehali.dev/projects/412f2701-bf24-4287-bc7d-a92ee6e7bcba/files/faee5d48-f8d4-4f40-a434-f4e6c92b31e1.jpg',
      specs: ['2.5L', '181 л.с.', 'CVT']
    },
    {
      id: 2,
      name: 'Hyundai Tucson 2024',
      price: 'от 3 200 000 ₽',
      image: 'https://cdn.poehali.dev/projects/412f2701-bf24-4287-bc7d-a92ee6e7bcba/files/c49fa13a-d8d4-40db-83f1-87d60553b20b.jpg',
      specs: ['2.0L', '150 л.с.', 'AT']
    },
    {
      id: 3,
      name: 'BYD Han EV 2024',
      price: 'от 4 100 000 ₽',
      image: 'https://cdn.poehali.dev/projects/412f2701-bf24-4287-bc7d-a92ee6e7bcba/files/c36d3a51-4e12-4896-b1e1-2bbfe1a14d36.jpg',
      specs: ['Электро', '517 л.с.', '605 км']
    }
  ];

  const services = [
    {
      icon: 'Search',
      title: 'Подбор автомобиля',
      description: 'Найдём идеальный автомобиль по вашим требованиям и бюджету'
    },
    {
      icon: 'Shield',
      title: 'Полная проверка',
      description: 'Детальная диагностика и проверка истории авто перед покупкой'
    },
    {
      icon: 'Ship',
      title: 'Доставка в РФ',
      description: 'Организуем безопасную доставку из любой страны Азии'
    },
    {
      icon: 'FileText',
      title: 'Таможенное оформление',
      description: 'Полное сопровождение растаможки и документов'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши пожелания, подбираем варианты'
    },
    {
      number: '02',
      title: 'Поиск и проверка',
      description: 'Находим автомобиль, проверяем состояние'
    },
    {
      number: '03',
      title: 'Покупка',
      description: 'Выкупаем авто на аукционе или у дилера'
    },
    {
      number: '04',
      title: 'Доставка',
      description: 'Организуем доставку и растаможку'
    }
  ];

  const reviews = [
    {
      name: 'Дмитрий Соколов',
      text: 'Спасибо LSR CARS за профессиональную работу! Привезли Camry из Японии за 3 недели. Всё прозрачно и честно.',
      rating: 5
    },
    {
      name: 'Анна Волкова',
      text: 'Очень довольна сервисом! Помогли с выбором, все документы оформили быстро. Рекомендую!',
      rating: 5
    },
    {
      name: 'Сергей Петров',
      text: 'Отличная команда! Привезли Tucson из Кореи. Машина в идеальном состоянии, цена справедливая.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">LSR CARS</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#process" className="text-sm hover:text-primary transition-colors">Процесс</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
              <Button size="sm">Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
            Импорт авто<br />из Азии
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Официальная доставка с полным сопровождением
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="text-lg px-8">
              Подобрать авто
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Консультация
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="catalog" data-section="catalog" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('catalog') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-muted-foreground">Актуальные предложения из стран Азии</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card 
                key={car.id}
                className={`group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl ${visibleSections.has('catalog') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{car.price}</p>
                  <div className="flex gap-4 mb-4">
                    {car.specs.map((spec, i) => (
                      <span key={i} className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" data-section="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл импорта под ключ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card border-border hover:border-primary hover:bg-secondary/50 transition-all duration-500 hover:scale-105 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" data-section="process" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4">Процесс работы</h2>
            <p className="text-xl text-muted-foreground">Простые шаги до получения авто</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-1000 ${visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="text-8xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" data-section="reviews" className="py-24">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('reviews') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className={`p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 ${visibleSections.has('reviews') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <p className="font-bold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" data-section="about" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-8 text-center">О компании</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <span className="text-primary font-bold">LSR CARS</span> — надёжный партнёр в импорте автомобилей из стран Азии. 
                Мы специализируемся на доставке качественных автомобилей из Японии, Кореи и Китая с полным юридическим 
                сопровождением.
              </p>
              <p>
                За годы работы мы помогли сотням клиентов приобрести автомобили мечты по честным ценам. 
                Наша команда профессионалов обеспечивает полный контроль на каждом этапе — от подбора до получения ключей.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">7 лет</div>
                  <div className="text-sm">На рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm">Легальный импорт</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" data-section="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Ответим на все вопросы и поможем с выбором</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className={`p-8 bg-card border-border transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@lsrcars.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Примерная, 123</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 16:00</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className={`p-8 bg-card border-border transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" className="bg-background min-h-[120px]" />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">LSR CARS</div>
              <p className="text-sm text-muted-foreground">
                Импорт автомобилей из Азии с полным сопровождением
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Подбор авто</div>
                <div>Доставка</div>
                <div>Растаможка</div>
                <div>Проверка</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>О нас</div>
                <div>Отзывы</div>
                <div>Контакты</div>
                <div>Блог</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>+7 (999) 123-45-67</div>
                <div>info@lsrcars.ru</div>
                <div>Москва, ул. Примерная, 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2024 LSR CARS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
