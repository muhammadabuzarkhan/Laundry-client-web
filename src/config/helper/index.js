import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = () => {
  let stripePromise = loadStripe('pk_test_51PJcIeHKbd8m487KiKtiZkT7QJmHlzEHRTqMxJzDujUVtwDw9inDzANAViKiVbFyFuETeFjifM6WVkMlig7NLiQZ00sLzr5VPq');
  return 
}

export const ImageUrl = (image) => {
  let {PUBLIC_URL} = process.env
  return `${PUBLIC_URL}/assets/images/${image}`
}