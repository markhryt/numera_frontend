export default function Scan_price(){
    return (
		<div className="app-wrapper">
      {
        cardsData.map(props => {                              
          return (
            <PricingCard
              {...props}
              key={props.id}
            />
          )
        })
      }
		</div>
	);
};

const cardsData = [
  {
    id: 1,
    type: 'free',
    title: 'Free Plan',
    description: 'Get 100 scans free with registration',
    price: 0,
    recurrency: 0,
    mostPopular: false,
    data: ['100 scans', '100 documents saved limit']
  },
  {
    id: 2,
    type: 'basic',
    title: 'Basic Plan',
    description: 'Lorem ipsum',
    price: 29.99,
    recurrency: 24.99,
    mostPopular: false,
    data: ['2TB Storage', '200 E-mails', '10 Accounts']
  },
  {
    id: 3,
    type: 'medium',
    title: 'Medium Plan',
    description: 'Lorem ipsum',
    price: 69.99,
    recurrency: 59.99,
    mostPopular: true,
    data: ['10TB Storage', '500 E-mails', '20 Accounts', '24/7 Support']
  },
  {
    id: 4,
    type: 'pro',
    title: 'Pro Plan',
    description: 'Lorem ipsum',
    price: 99.99,
    recurrency: 84.99,
    mostPopular: false,
    data: ['50TB Storage', 'Unlimited E-mails', 'Unlimited Accounts', '24/7 Support']
  }
];


function CardDescription({ title, description }) {	
	return (
		<div className="card-description">
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
	);
};

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
			<p>
				<strong className="price">$ { price }</strong>
        <strong> / mo.</strong>
			</p>
			<p>
				<span className="recurrency">
					Billed Anually or	$ { recurrency }/monthly
				</span>
			</p>
		</div>
	);
};

function CardFeatures({ data }) {	
	return (
		<div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	);
};

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
			<button onClick={clickMe}>BUY NOW</button>
		</div>
	);
};

function PricingCard(props) {	
	const { 
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    data,
    clickMe
  } = props;
	
	return (
		<div className={`card pricing-card ${type}`}>
      { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			<CardDescription title={title} description={description} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction clickMe={clickMe} />
		</div>
	);
};

