import Button from './Button';

export default function ContactUsButton({ className, onSubmit, loading }: { className?: string, onSubmit?: () => void, loading?: boolean }) {
  return (
    <a onClick={onSubmit} href={onSubmit ? undefined : 'https://t.me/nextmark'}>
      <Button disabled={loading} title={loading ? 'Загрузка...' : 'СВЯЗАТЬСЯ С НАМИ'} className={className}/>
    </a>
  );
}
