export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-24 items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vishavjeet Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
