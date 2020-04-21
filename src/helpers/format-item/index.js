/* global process */

export default ({
  itemId,
  title,
  categories,
  image = {},
  itemWebUrl,
  itemLocation,
  seller = {},
  price = {},
  buyingOptions
}) => {
  return {
    id: itemId,
    title,
    category: categories,
    image: process.env.NODE_ENV === 'development' ? (image.imageUrl || '').replace('https://','http://') : (image.imageUrl || ''),
    url: itemWebUrl,
    sellerRanking: seller.feedbackPercentage,
    location: itemLocation,
    price,
    buyingOptions
  }
}