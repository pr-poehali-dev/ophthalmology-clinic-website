import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  const services = [
    {
      icon: "Eye",
      title: "Диагностика зрения",
      description: "Комплексное обследование на современном оборудовании"
    },
    {
      icon: "ScanEye",
      title: "Лазерная коррекция",
      description: "Безопасное восстановление зрения по технологии LASIK"
    },
    {
      icon: "Glasses",
      title: "Подбор оптики",
      description: "Индивидуальный подбор очков и контактных линз"
    },
    {
      icon: "HeartPulse",
      title: "Лечение заболеваний",
      description: "Терапия катаракты, глаукомы и других патологий"
    }
  ];

  const features = [
    {
      icon: "Award",
      title: "Опытные врачи",
      description: "Специалисты с опытом работы более 15 лет"
    },
    {
      icon: "Microscope",
      title: "Современное оборудование",
      description: "Новейшие технологии диагностики и лечения"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Полная ответственность за результат лечения"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Eye" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-foreground">ОптикаПро</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Записаться</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ваше зрение —<br />наша забота
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Современная офтальмологическая клиника с индивидуальным подходом к каждому пациенту
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/bc3b205b-43c4-460b-aa26-978cbf51ca2f/files/44307577-8e55-4e7c-a434-04c1cf5af819.jpg"
                alt="Современная офтальмологическая клиника"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр офтальмологических услуг</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Преимущества нашей клиники</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon} className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Записаться на приём</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку, и мы свяжемся с вами</p>
          </div>
          <Card className="p-8 md:p-12 shadow-xl border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                <Input 
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                <Input 
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Опишите вашу проблему или вопрос"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 text-base"
                  required
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Eye" className="text-primary" size={32} />
                <span className="text-2xl font-bold">ОптикаПро</span>
              </div>
              <p className="text-white/70">Современная офтальмологическая клиника полного цикла</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@optikapro.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 ОптикаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
