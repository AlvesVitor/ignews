import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs(){
    const stripeJs = await loadStripe('pk_test_51K714rEXX5YRu5s5PSPiJLDH7lh8BGTHRErz72TxhTa6bt2LTCbIZFXYlb3jqVBzg7aANeThz0lXeNabQZgiNZNR009CvXYBW2')

    return stripeJs;
}