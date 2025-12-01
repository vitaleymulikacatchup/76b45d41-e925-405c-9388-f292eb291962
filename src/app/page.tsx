"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function CoffeePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Coffee Haven"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Order", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Visit Us",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Brew Perfection in Every Cup"
          description="Experience premium specialty coffee crafted by passionate baristas. From rich espresso to smooth cold brew, discover your new favorite blend."
          tag="Welcome to Coffee Haven"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605305765-le0bht2q.jpg",
              imageAlt: "Fresh brewed coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605307547-n3bgt94i.jpg",
              imageAlt: "Latte with coffee art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605309143-jkhhpk6m.jpg",
              imageAlt: "Cozy coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605310717-jf5qpkfr.jpg",
              imageAlt: "Roasted coffee beans"
            }
          ]}
          buttons={[
            { text: "Order Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Us"
          description={[
            "Coffee Haven was founded with a single mission: to bring the finest specialty coffee to our community. We source premium beans from sustainable farms around the world.",
            "Our passionate baristas are trained in the art of coffee preparation. Every cup is crafted with precision, care, and a genuine love for the craft. We believe great coffee brings people together."
          ]}
          showBorder={true}
          buttons={[
            { text: "Visit Us Today", href: "contact" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Menu"
          description="Discover our signature coffee selections and specialty beverages"
          products={[
            {
              id: "1",
              brand: "Coffee Haven",
              name: "Classic Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "128",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605313341-7u91qj87.jpg",
              imageAlt: "Classic espresso shot"
            },
            {
              id: "2",
              brand: "Coffee Haven",
              name: "Creamy Cappuccino",
              price: "$4.75",
              rating: 5,
              reviewCount: "215",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605314414-8to98z0d.jpg",
              imageAlt: "Cappuccino with foam art"
            },
            {
              id: "3",
              brand: "Coffee Haven",
              name: "Smooth Cold Brew",
              price: "$4.25",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605315660-3ml43f9a.jpg",
              imageAlt: "Cold brew iced coffee"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Join hundreds of coffee lovers who trust us for their daily brew"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605316968-l3qua2yb.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Office Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605318112-px2s5d2l.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605319372-td82ruqy.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Daily Visitor",
              company: "Student",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605322968-oq840u7k.jpg",
              imageAlt: "David Park"
            },
            {
              id: "5",
              name: "Jessica Williams",
              role: "Coffee Enthusiast",
              company: "Freelancer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605324239-q2039cpr.jpg",
              imageAlt: "Jessica Williams"
            },
            {
              id: "6",
              name: "James Martin",
              role: "Weekend Regular",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605326024-69qdekxa.jpg",
              imageAlt: "James Martin"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Updates"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for exclusive offers, new menu launches, and coffee tips delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764605327431-1ukyuf28.jpg"
          imageAlt="Cozy coffee shop atmosphere"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your inbox. Unsubscribe anytime. By subscribing, you agree to our Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Coffee Haven"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Menu", href: "products" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" }
              ]
            },
            {
              items: [
                { label: "Follow Us", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}