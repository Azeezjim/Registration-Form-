import React from 'react'

function MyPaymentBody() {
  return (
    <div className="bg-white border drop-shadow-lg width-full rounded-lg" >
      <div className='grid grid-cols-4 justify-center'>
        <p>Paid to</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Type</p>
      </div>
      <hr />
    </div>
  )
}

export default MyPaymentBody
