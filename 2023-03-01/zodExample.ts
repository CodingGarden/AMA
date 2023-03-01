import { z } from "npm:zod";

const ShoppingCartItem = z.object({
  product_id: z.string().min(10),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  quantity: z.number().min(1),
});

type ShoppingCartItem = z.infer<typeof ShoppingCartItem>;

// Error if not valid!
const validated = await ShoppingCartItem.parseAsync({
  product_id: '029237859383929',
  title: 'Coffee Mug',
  description: 'CODE Mug!',
  url: 'https://merch.coding.garden/listing/just-code-it?product=1565',
  quantity: 1,  
});

// Safely use this object... put it in your database etc.
console.log(validated);

const cart: ShoppingCartItem[] = [];

async function addToCart(item: ShoppingCartItem) {
  const validated = await ShoppingCartItem.parseAsync(item);
  cart.push(validated);
}

addToCart({
  banana: true,
})

console.log(cart);