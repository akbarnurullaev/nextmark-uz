import Button from './Button';

export default function ContactUsButton({ className, onSubmit, loading }: { className?: string, onSubmit?: () => void, loading?: boolean }) {
  return (
    <a onClick={onSubmit} href={onSubmit ? undefined : 'tel:+998 90 009 09 59'}>
      <Button disabled={loading} title={loading ? 'Загрузка...' : 'СВЯЗАТЬСЯ С НАМИ'} className={className}/>
    </a>
  );
}
