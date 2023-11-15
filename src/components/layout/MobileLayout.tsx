type MobileLayoutProps = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
};

export default function MobileLayout({
  children,
  footer,
  header,
}: MobileLayoutProps) {
  return (
    <div className="surface_primary">
      <div className="relative w-full mx-auto min-h-screen surface_primary">
        {header && header}
        <main>{children}</main>
        {footer && footer}
      </div>
    </div>
  );
}
