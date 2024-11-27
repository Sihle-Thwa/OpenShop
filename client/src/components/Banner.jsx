import { BsArrowCounterclockwise, BsCardText, BsGift, BsRepeat, BsTruck } from "react-icons/bs"

function Banner() {
  return (
    <div className="container banner bg-light">
        
        <div className="row d-flex justify-content-between p-4">
            <div className="col">
            <div className="row"><BsGift style={{fontSize:'4rem'}}/></div>
            <div className="row d-flex justify-content-center p-2">Gift Wrapping</div>
            <span className="blockquote-footer">Select in checkout</span>
                
                </div>
            <div className="col">
            <div className="row"><BsTruck style={{fontSize:'4rem'}}/></div>
            <div className="row d-flex justify-content-center p-2">Free Shipping</div>
            <span className="blockquote-footer">Over R700</span>
                
                </div>
            <div className="col">
            <div className="row"><BsRepeat style={{fontSize:'4rem'}}/></div>
            <div className="row d-flex justify-content-center p-2">Exchange Policy</div>
            <span className="blockquote-footer">Extended in 60 days</span>
                
                </div>
            <div className="col">
            <div className="row"><BsCardText style={{fontSize:'4rem'}}/></div>
            <div className="row d-flex justify-content-center p-2">Vouchers</div>
            <span className="blockquote-footer">Gift someone</span>
                
                </div>
            <div className="col align-content-center justify-content-center">
                <div className="row"><BsArrowCounterclockwise style={{fontSize:'4rem'}}/></div>
                <div className="row d-flex justify-content-center p-2">Return Policy</div>
                <span className="blockquote-footer">30 days free</span>
                
                </div>
        </div>
        </div>
  )
}

export default Banner