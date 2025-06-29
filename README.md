# ALX Listing App - Booking Detail Page

A responsive booking detail page built with Next.js, TypeScript, and Tailwind CSS. This application allows users to enter their contact and payment details, review booking information, and confirm their booking.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Contact Form**: Collects user contact information
- **Payment Form**: Secure payment information input
- **Billing Address**: Complete billing address collection
- **Order Summary**: Displays booking details and price breakdown
- **Cancellation Policy**: Clear cancellation terms and conditions
- **Ground Rules**: House rules for guests

## Tech Stack

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app-03
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
alx-listing-app-03/
├── components/
│   └── booking/
│       ├── BookingForm.tsx
│       ├── OrderSummary.tsx
│       └── CancellationPolicy.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── booking/
│       └── index.tsx
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home Page** (`/`): Landing page with navigation to booking
- **Booking Page** (`/booking`): Main booking form with order summary

## Components

### BookingForm
- Contact information input (First Name, Last Name, Email, Phone)
- Payment information (Card Number, Expiration Date, CVV)
- Billing address (Street, City, State, Zip Code, Country)
- Submit button for booking confirmation

### OrderSummary
- Property details with image and rating
- Stay information (dates and duration)
- Price breakdown (booking fee, subtotal, grand total)

### CancellationPolicy
- Cancellation terms and conditions
- House rules and guidelines

## Styling

The application uses Tailwind CSS for styling, providing:
- Responsive grid layouts
- Modern card designs
- Consistent spacing and typography
- Hover effects and transitions
- Mobile-first responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the ALX curriculum.