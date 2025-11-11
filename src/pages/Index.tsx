import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const { scrollY } = useScroll();
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [carPrice, setCarPrice] = useState(3000000);
  const [deliveryCost, setDeliveryCost] = useState(250000);

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Land Cruiser 300',
      year: 2023,
      price: '8 500 000',
      image: '🚙',
      specs: ['3.5L V6', '415 л.с.', 'Полный привод']
    },
    {
      id: 2,
      brand: 'Lexus',
      model: 'LX 600',
      year: 2023,
      price: '12 800 000',
      image: '🚗',
      specs: ['3.5L V6', '409 л.с.', 'Гибрид']
    },
    {
      id: 3,
      brand: 'Toyota',
      model: 'Alphard',
      year: 2023,
      price: '6 200 000',
      image: '🚐',
      specs: ['2.5L Hybrid', '7 мест', 'Premium']
    },
    {
      id: 4,
      brand: 'Nissan',
      model: 'Patrol',
      year: 2023,
      price: '7 900 000',
      image: '🚙',
      specs: ['5.6L V8', '400 л.с.', 'Люкс']
    }
  ];

  const steps = [
    {
      icon: 'Search',
      title: 'Подбор автомобиля',
      description: 'Находим идеальный вариант под ваш бюджет и требования'
    },
    {
      icon: 'FileCheck',
      title: 'Проверка и оформление',
      description: 'Полная проверка истории, аукционный лист, документы'
    },
    {
      icon: 'Ship',
      title: 'Доставка',
      description: 'Морская перевозка и таможенное оформление'
    },
    {
      icon: 'Key',
      title: 'Передача ключей',
      description: 'Получаете готовый автомобиль с российскими документами'
    }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Проверяем каждый автомобиль перед отправкой'
    },
    {
      icon: 'Clock',
      title: 'Быстро',
      description: 'Доставка за 30-45 дней от заказа до получения'
    },
    {
      icon: 'Wallet',
      title: 'Выгодно',
      description: 'Экономия до 30% по сравнению с рынком РФ'
    },
    {
      icon: 'Users',
      title: 'Опыт',
      description: 'Более 500 довольных клиентов за 5 лет работы'
    }
  ];

  const reviews = [
    {
      name: 'Александр М.',
      car: 'Toyota Land Cruiser 300',
      text: 'Отличный сервис! Помогли с выбором, все этапы прозрачны. Получил машину мечты за адекватные деньги.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      car: 'Lexus LX 600',
      text: 'Профессиональный подход. Все документы в порядке, машина в идеальном состоянии. Рекомендую!',
      rating: 5
    },
    {
      name: 'Сергей П.',
      car: 'Toyota Alphard',
      text: 'Быстро нашли нужную комплектацию. Доставка точно в срок. Буду обращаться еще!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            LSR CARS
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-6 items-center"
          >
            <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
            <a href="#process" className="hover:text-accent transition-colors">Как работаем</a>
            <a href="#calculator" className="hover:text-accent transition-colors">Калькулятор</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Отзывы</a>
            <Button>Связаться</Button>
          </motion.div>
        </div>
      </nav>

      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Автомобили из Азии
              <br />
              <span className="text-accent">под ключ</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Официальный импорт премиальных автомобилей из Японии, Кореи и ОАЭ
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="text-lg px-8">
                Подобрать авто
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Рассчитать стоимость
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { value: '500+', label: 'Авто продано' },
              { value: '30%', label: 'Экономия' },
              { value: '5 лет', label: 'На рынке' },
              { value: '45 дней', label: 'Доставка' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="catalog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные модели</h2>
            <p className="text-xl text-muted-foreground">Автомобили в наличии и под заказ</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => setSelectedCar(car.id)}
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                    {car.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-1">{car.year}</div>
                    <h3 className="text-xl font-bold mb-2">{car.brand} {car.model}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {car.specs.map((spec, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-accent">{car.price} ₽</div>
                      <Button size="sm" variant="ghost">
                        <Icon name="ArrowRight" size={20} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline">
              Смотреть весь каталог
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой процесс от заявки до получения авто</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0"
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={step.icon as any} size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-3xl font-bold text-accent flex-shrink-0">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Узнайте ориентировочную стоимость автомобиля с доставкой
            </p>

            <Card className="p-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Стоимость автомобиля на аукционе: {carPrice.toLocaleString('ru-RU')} ₽
                  </label>
                  <Slider
                    value={[carPrice]}
                    onValueChange={(value) => setCarPrice(value[0])}
                    min={1000000}
                    max={20000000}
                    step={100000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 000 000 ₽</span>
                    <span>20 000 000 ₽</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Стоимость доставки: {deliveryCost.toLocaleString('ru-RU')} ₽
                  </label>
                  <Slider
                    value={[deliveryCost]}
                    onValueChange={(value) => setDeliveryCost(value[0])}
                    min={150000}
                    max={500000}
                    step={10000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>150 000 ₽</span>
                    <span>500 000 ₽</span>
                  </div>
                </div>

                <div className="bg-accent/5 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Стоимость авто:</span>
                      <span className="font-semibold">{carPrice.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка и растаможка:</span>
                      <span className="font-semibold">{deliveryCost.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Наши услуги (10%):</span>
                      <span className="font-semibold">{(carPrice * 0.1).toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Итого:</span>
                        <span className="text-3xl font-bold text-accent">
                          {(carPrice + deliveryCost + carPrice * 0.1).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Получить точный расчет
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.car}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы начать?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Оставьте заявку и получите консультацию в течение 15 минут
                </p>
              </div>

              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input type="tel" placeholder="Телефон" className="h-12" />
                <Input placeholder="Какой автомобиль интересует?" className="h-12" />
                <Button className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">LSR CARS</div>
              <p className="text-sm opacity-80">
                Официальный импорт автомобилей из стран Азии
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Подбор автомобилей</li>
                <li>Доставка</li>
                <li>Растаможка</li>
                <li>Сертификация</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Контакты</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@lsrcars.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 LSR CARS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
