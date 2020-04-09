/* global process */

export default ({
  itemId,
  title,
  primaryCategory,
  galleryURL = [],
  viewItemURL,
  paymentMethod,
  location,
  sellerInfo,
  returnsAccepted,
  sellingStatus
}) => {
  return {
    id: itemId[0],
    title: title[0],
    category: (primaryCategory[0] || {}).categoryName[0],
    image: process.env.NODE_ENV === 'development' ? (galleryURL[0] || '').replace('https://','http://') : (galleryURL[0] || ''),
    url: viewItemURL[0],
    sellerRanking: sellerInfo[0].positiveFeedbackPercent[0],
    paymentMethod: (paymentMethod || [])[0],
    location: location[0],
    returnsAccepted: Boolean(returnsAccepted[0]),
    price: (sellingStatus[0]).convertedCurrentPrice[0]
  }
}