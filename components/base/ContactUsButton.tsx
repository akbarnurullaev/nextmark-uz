import Button from './Button';

export default function ContactUsButton({ className }: { className?: string }) {
  return (
    <a href="tel:+998 90 009 09 59">
      <Button title="СВЯЗАТЬСЯ С НАМИ" className={className}/>
    </a>
  );
}
