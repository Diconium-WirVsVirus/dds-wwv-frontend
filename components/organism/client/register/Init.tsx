// export default {
//   store_name: "",
//   store_zipcode: "",
//   store_street: "",
//   store_streetnr: "",
//   store_city: "",
//   store_description: "",
//   store_openinghours: [
//     {
//       days: {
//         monday: false,
//         tuesday: false,
//         wednesday: false,
//         thursday: false,
//         friday: false,
//         saturday: false,
//         sunday: false,
//       },
//       from: 0,
//       to: 0,
//     },
//   ],
//   store_members: 0,
//   store_email: "",
//   store_instagram: "",
//   store_twitter: "",
//   store_facebook: "",
//   store_phone: "",
//   store_whatsapp: "",
//   store_website: "",
//   store_facetime: "",
//   store_skype: "",
//   store_category: "0",
//   store_ownerimage: "",
//   store_image: "",
//   store_video: "",
//   store_pickup: false,
//   store_delivery: false,
//   store_shipping: false,
//   firstname: "",
//   lastname: "",
//   phone: "",
//   email: "",
//   products: [
//     {
//       image: "",
//        preview: "",
//       name: "",
//       description: "",
//       price: 0.0,
//     },
//   ],
// };

export default {
  store_name: "Mein Store",
  store_zipcode: "75542",
  store_street: "Teststraße",
  store_streetnr: "12",
  store_city: "Teststadt",
  store_description: "Beschreibung",
  store_openinghours: [
    {
      days: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
      from: 8,
      to: 16,
    },
  ],
  store_members: 2,
  store_email: "test@test.de",
  store_instagram: "",
  store_twitter: "",
  store_facebook: "",
  store_phone: "",
  store_whatsapp: "",
  store_website: "",
  store_facetime: "",
  store_skype: "",
  store_category: "10",
  store_ownerimage: "",
  store_image: "",
  store_video: "",
  store_pickup: true,
  store_delivery: false,
  store_shipping: false,
  firstname: "Test",
  lastname: "Test",
  phone: "+491629824160",
  email: "test@test.de",
  products: [
    {
      image: "",
      preview: "",
      name: "Test",
      description: "Lorem Ipsum",
      price: 9.0,
    },
    {
      image: "",
      preview: "",
      name: "Test",
      description: "Lorem Ipsum",
      price: 9.0,
    },
    {
      image: "",
      preview: "",
      name: "Test",
      description: "Lorem Ipsum",
      price: 9.0,
    },
  ],
};
