import Button from "./Button";

export default function ContactUsButton({
  className,
  onSubmit,
  loading,
}: {
  className?: string;
  onSubmit?: () => void;
  loading?: boolean;
}) {
  return (
    <a onClick={onSubmit} href={onSubmit ? undefined : "tel:+998 95 089 49 39"}>
      <Button
        disabled={loading}
        title={loading ? "Загрузка..." : "Оставить заявку"}
        className={className}
      />
    </a>
  );
}
