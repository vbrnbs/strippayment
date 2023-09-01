import React from "react";

const Berlet = () => {
  return (
    <div>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1NlKkXF8wzumqS6HXjUxVVX3"
        publishable-key="pk_test_51KYyZiF8wzumqS6HBy31L1p0F7uTtmYF56TyTM8nUDIFOnxiXfQLq2BcK9rkVDpsrcppR2ii6PCVe0CRqZPME9xT00eLyQ2tmp"
      ></stripe-pricing-table>
    </div>
  );
};

export default Berlet;
