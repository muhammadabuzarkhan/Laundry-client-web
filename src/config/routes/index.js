import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ClientLayout from "../../components/layout";
import Home from "../../views/home";
import Commercial from "../../views/commercial";
import About from "../../views/about";
import Services from "../../views/services";
import Blogs from "../../views/blog";
import BlogDetails from "../../views/blog/blogDetails";
import ContactUs from "../../views/contactUs";
import ReferFriend from "../../views/referFriend";
import Login from "../../views/login";
import SignUp from "../../views/signUp";
import SignupEmail from "../../views/signUp/signupEmail";
import ConfirmEmail from "../../views/signUp/confirmEmail";
import Steps from "../../views/steps";
import Pricelist from "../../views/pricelist";
import MyOrders from "../../views/myOrders";
import OrderDetails from "../../views/myOrders/OrderDetails";
import ForgetPassword1 from "../../views/forget-password-1";
import ForgetPassword2 from "../../views/forget-password-2";
import ForgetPassword3 from "../../views/forget-password-3";
import Profile from '../../views/profile'
import EditProfile from '../../views/editProfile'
import ReferalCode from '../../views/referalCode'
import SubscriptionPlan from '../../views/subscriptionPlan'
import ThanksPage from "../../views/myOrders/ThanksPage";
import Term from '../../views/terms-condition/terms'
import Faqs from '../../views/faqs/faqs'

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise = loadStripe('pk_test_51PU7mXBRjHyJTsKflCt7St6pOwgDM0jeb6hiTihTFKvbIItjEeLVcCNYsEOXdcLdXMJ9MbLtnNwJ9J3Y33veXwCO00fhd2v0qN');

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component does not render anything
}

function MyRouter() {
  const options = {
    clientSecret: 'sk_test_51PU7mXBRjHyJTsKfciEWvr859O8S07P7YoqS1zjCcC57KE1B1GukAsYoi9oRb9ApR7k5awbAX1XRW0tneJD7mUQf00tFL1WcQK',
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop /> {/* This component handles scroll-to-top functionality */}
        <Routes>
          <Route
            path="/"
            index
            element={
              <ClientLayout>
                <Home />
              </ClientLayout>
            }
          />
          <Route
            path="/commercial"
            element={
              <ClientLayout header={true}>
                <Commercial />
              </ClientLayout>
            }
          />
          <Route
            path="/about"
            element={
              <ClientLayout header={true}>
                <About />
              </ClientLayout>
            }
          />
          <Route
            path="/subscriptionPlan"
            element={
              <ClientLayout header={true}>
                <SubscriptionPlan />
              </ClientLayout>
            }
          />
          <Route
            path="/servicesnprices"
            element={
              <ClientLayout header={true}>
                <Services />
              </ClientLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <ClientLayout header={true}>
                <Blogs />
              </ClientLayout>
            }
          />
          <Route
            path="/blog/blogdetails"
            element={
              <ClientLayout header={true}>
                <BlogDetails />
              </ClientLayout>
            }
          />
          <Route
            path="/contactus"
            element={
              <ClientLayout header={true}>
                <ContactUs />
              </ClientLayout>
            }
          />
          <Route
            path="/referfriend"
            element={
              <ClientLayout header={true}>
                <ReferFriend />
              </ClientLayout>
            }
          />
          <Route
            path="/login"
            element={
              <ClientLayout header={true}>
                <Login />
              </ClientLayout>
            }
          />
          <Route
            path="/forget-password-1"
            element={
              <ClientLayout header={true}>
                <ForgetPassword1 />
              </ClientLayout>
            }
          />
          <Route
            path="/forget-password-2"
            element={
              <ClientLayout header={true}>
                <ForgetPassword2 />
              </ClientLayout>
            }
          />
          <Route
            path="/forget-password-3"
            element={
              <ClientLayout header={true}>
                <ForgetPassword3 />
              </ClientLayout>
            }
          />
          <Route
            path="/signUp"
            element={
              <ClientLayout header={true}>
                <SignUp />
              </ClientLayout>
            }
          />
          <Route
            path="/signupEmail"
            element={
              <ClientLayout header={true}>
                <SignupEmail />
              </ClientLayout>
            }
          />
          <Route
            path="/confirmEmail"
            element={
              <ClientLayout header={true}>
                <ConfirmEmail />
              </ClientLayout>
            }
          />
          <Route
            path="/steps"
            element={
              <ClientLayout header={true}>
                <Elements stripe={stripePromise} >
                  <Steps />
                </Elements>
              </ClientLayout>
            }
          />
          <Route
            path="/pricelist"
            element={
              <ClientLayout header={true}>
                <Pricelist />
              </ClientLayout>
            }
          />
          <Route
            path="/myOrders"
            element={
              <ClientLayout header={true}>
                <MyOrders />
              </ClientLayout>
            }
          />
          <Route
            path="/thanks"
            element={
              <ClientLayout header={true}>
                <ThanksPage />
              </ClientLayout>
            }
          />
          <Route
            path="/myOrders/:id"
            element={
              <ClientLayout header={true}>
                <OrderDetails />
              </ClientLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <ClientLayout header={true}>
                <Profile />
              </ClientLayout>
            }
          />
          <Route
            path="/referalCode"
            element={
              <ClientLayout header={true}>
                <ReferalCode />
              </ClientLayout>
            }
          />
          <Route
            path="/editProfile"
            element={
              <ClientLayout header={true}>
                <EditProfile />
              </ClientLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <ClientLayout header={true}>
                <Term />
              </ClientLayout>
            }
          />
          <Route
            path="/faqs"
            element={
              <ClientLayout header={true}>
                <Faqs />
              </ClientLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyRouter;
