import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <CircleCheck className="h-20 w-20 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold font-headline text-primary mb-4">Order Placed!</h1>
      <p className="text-lg text-muted-foreground max-w-md mb-8">
        Thank you for your purchase. Your food is on its way and will arrive shortly.
      </p>
      <Button asChild>
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
