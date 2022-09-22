 import sanityClient from '@sanity/client'
import  ImageUrlBuilder from '@sanity/image-url'

 export const client = sanityClient({
  projectId: "cn9rclr9",
  dataset: "production",
  apiVersion: "2022-09-20",
  useCdn: true,
  token: 
  "skTbEIJGpyEOge51wcPLZovqSKtmeCYZtIkGvmJW98Tc58oyyDqGsoBLl1jc4eFPEBuN8PJJUaUSdQcXbqWoqBg9ZUt6G58HocpBz3qEyg0jV11AdCxXV911VlxThXbVvIAS8CKDtncClPBIapCSnhqmI8zpEbWQbWVUOREJC9qKfLtAnA5C"
 })
 const builder = ImageUrlBuilder(client);

 export const urlFor = (source) => builder.image(source);