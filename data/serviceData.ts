
import { Car, Bike, Tractor, Truck, RefreshCw, ShieldPlus, LucideIcon } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    icon: LucideIcon;
    shortDesc: string;
    metaDescription: string;
    keywords: string;
    heroImage: string;
    content: string;
}

export const servicesData: ServiceData[] = [
    {
        slug: 'car-insurance',
        title: 'Car Insurance',
        icon: Car,
        shortDesc: "Comprehensive coverage starting at ₹2094. Zero Dep & Roadside Assistance available.",
        metaDescription: "Get the best Car Insurance in Maharashtra. Compare quotes, get cashless garage benefits, and instant policy renewal. Protect your car against accidents, theft, and third-party liabilities.",
        keywords: "car insurance, four wheeler insurance, own damage cover, third party car insurance, car insurance renewal, maharashtra car insurance",
        heroImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
        content: `
# Car Insurance Made Easy
**Jaw-Dropping deals! Car insurance starting at ₹2094**

Owning a car gives you freedom, but it also comes with responsibilities. Accidents, theft, and natural calamities can happen anytime. **MV Vehicle Insurance** (in partnership with leading insurers like Royal Sundaram) provides robust protection for your car, ensuring you drive with peace of mind.

## Types of Car Insurance
Choosing the right cover is essential. Here is a breakdown:

### 1. Comprehensive Insurance
**Best for:** Car owners seeking complete protection.
*   Covers damages to your own car (Own Damage).
*   Covers Third-Party liabilities (Property, Injury, Death).
*   Protects against theft, fire, and natural disasters.

### 2. Own Damage Insurance
**Best for:** Owners who already have a Third-Party policy.
*   Covers ONLY damage to your car.
*   Does not cover third-party liability.

### 3. Third-Party Insurance
**Mandatory by Law.**
*   Covers damages & losses caused to a third-party person, vehicle, or property.
*   Does NOT cover your own car.

---

## 👑 Royal Pro-Tip: Bumper to Bumper Cover
**Zero Depreciation Cover** is like a magic shield for your car!
Standard policies deduct "depreciation" (wear and tear cost) when replacing parts. With **Zero Dep**, you get the **full claim amount** without these deductions. It's equivalent to a "bumper-to-bumper" protection plan!

## Exclusive Features
### 🛠️ Trusted Repair Shop (TRS)
We offer a premium repair experience:
*   **Doorstep Repair:** We come to you.
*   **Pick-up & Drop:** Free service for garage repairs.
*   **Priority Service:** Repairs prioritized at our network garages.
*   **Cashless Facility:** We settle the bill directly with the garage. 8000+ garages nationwide.

### 🆘 Roadside Assistance (RSA)
Stuck in the middle of nowhere? Our 24/7 RSA has you covered:
*   **Emergency Towing**: Up to 100km.
*   **Flat Tyre Change**: We'll swap it for you.
*   **Battery Jumpstart**: For when your car refuses to start.
*   **Emergency Fuel Delivery**: Up to 5 Litres.
*   **Key Lockout**: Assistance if you lock your keys inside.

### ⚙️ Consumables Cover
Did you know engine oil, nuts, bolts, and AC gas are considered "consumables" and are NOT covered in standard policies? Our **Consumables Add-on** covers these costs, which can otherwise make up 10-15% of your repair bill.

---

## Seamless Claims Process
We pride ourselves on a stress-free claims experience:
1.  **Call Us:** Dial our helpline immediately after the incident.
2.  **Evaluation:** A surveyor or our TRS partner will inspect the damage.
3.  **Repair:** Your car is repaired at a network garage (Cashless) or a garage of your choice (Reimbursement).
4.  **Settlement:** Drive home your repaired car!

**Documents Required:** Claim Form, RC Copy, Driving License, KYC Documents.
    `
    },
    {
        slug: 'bike-insurance',
        title: 'Bike Insurance',
        icon: Bike,
        shortDesc: "Two-Wheeler insurance starting from ₹538. Ride with confidence.",
        metaDescription: "Buy or Renew Two Wheeler Insurance Online. Instant policy issuance for bikes and scooters. Third-party and comprehensive plans available.",
        keywords: "bike insurance, two wheeler insurance, scooter insurance, bike insurance renewal, third party bike insurance",
        heroImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop",
        content: `
# Two-Wheeler Insurance: Ride with Confidence
**Plans starting from just ₹538**

Two-wheelers are the lifeline of daily commute in India. Whether you ride a scooter or a superbike, having valid insurance is crucial for your safety and legal compliance.

## Types of Bike Insurance
### 1. Comprehensive Insurance
**Highly Recommended.**
*   Covers damages to your bike (Accidents, Fire, Theft).
*   Covers Third-Party Liabilities.
*   Personal Accident Cover for owner-driver (₹15 Lakhs).

### 2. Third-Party Insurance
**Mandatory by Law.**
*   Protects you against legal liability for injury/death/property damage to third parties.
*   Required to ride legally on Indian roads.

### 3. Own Damage Only
*   For those who already have a long-term Third-Party policy but want to protect their own bike.

---

## 👑 Royal Pro-Tips
### 1. No Claim Bonus (NCB)
NCB is a reward for safe driving! If you don't make a claim during the policy year, you get a discount on your renewal premium. This discount increases every claim-free year, going up to **50%**!
*   *Tip:* Drive safely to accumulate NCB and lower your premiums.

### 2. Scooter Owners
Scooters often have plastic body parts which are expensive to replace. A **Comprehensive Plan** covers these damages without burning a hole in your pocket. Installing an **Anti-Theft Device** can also help lower your premium!

## 24/7 Roadside Assistance
Don't let a breakdown ruin your ride. Our RSA covers:
*   **Flat Tyre Assistance:** We'll help fix the puncture.
*   **Emergency Fuel:** Delivery of up to 5 Litres of petrol.
*   **Battery Jumpstart:** Instant help for dead batteries.
*   **Towing:** To the nearest garage if on-spot repair isn't possible.

---

## Easy Claims Process
1.  **Intimate Claim:** Call 1800-568-9999 or use our app.
2.  **Upload Docs:** Upload photos of damage, RC, and DL.
3.  **Assessment:** Quick digital or physical inspection.
4.  **Approval:** Get approval and get your bike repaired cashless at 3000+ network garages.

**Documents:** RC, Driving License, Claim Form, KYC.
    `
    },
    {
        slug: 'tractor-insurance',
        title: 'Tractor Insurance',
        icon: Tractor,
        shortDesc: "Specialized protection for agricultural vehicles.",
        metaDescription: "Best Tractor Insurance plans for farmers. Covers agricultural usage and haulage. Protect your farming asset against accidents and damages.",
        keywords: "tractor insurance, commercial vehicle insurance, agriculture insurance, farmer insurance, maharashtra tractor insurance",
        heroImage: "https://images.unsplash.com/photo-1530267981375-f0de93fe1e91?q=80&w=2070&auto=format&fit=crop",
        content: `
# Tractor Insurance for Indian Farmers

Tractors are the backbone of agriculture. A breakdown or accident can severely impact a farmer's livelihood. Our specialist Tractor Insurance plans ensure that your farming operations never stop.

## Specific Coverage for Tractors
Unlike standard vehicles, tractors have specific usage patterns. Our policies cover:
*   **Agricultural Use:** Usage in fields for farming activities.
*   **Haulage:** Using a trolley to transport goods (requires specific endorsement).

## What is Covered?
*   **Own Damage:** Accidental damage, fire, lightning, theft, etc.
*   **Third-Party Liability:** Injury or property damage to others.
*   **Personal Accident:** Cover for the owner-driver and paid driver.

## Important Considerations
*   **Implements Cover:** Ensure your accessories like rotavators or trailers are also covered.
*   **Geographical Limit:** Policies are valid across India.
*   **Premium Calculation:** Based on IDV (Insured Declared Value) and location zone.

We understand the needs of farmers in Maharashtra and suggest the most economical and robust plans.
    `
    },
    {
        slug: 'commercial-vehicle',
        title: 'Commercial Vehicle Insurance',
        icon: Truck,
        shortDesc: "Secure your business assets: Taxis, Trucks, and Buses.",
        metaDescription: "Insurance for Trucks, Tempos, Buses, and Taxis. PCV and GCV insurance plans with fleet discounts and comprehensive coverage.",
        keywords: "commercial vehicle insurance, truck insurance, taxi insurance, goods carrying vehicle, passenger carrying vehicle, fleet insurance",
        heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
        content: `
# Commercial Vehicle Insurance (GCV & PCV)
**Secure Your Business. Drive with Confidence.**

For business owners, vehicles are assets. Downtime means loss of revenue. Whether you run a single taxi or a fleet of trucks, our Commercial Vehicle Insurance ensures your business keeps moving.

## Who Needs This Insurance?
### 🚖 Passenger Carrying Vehicles (PCV)
*   **Taxis / Cabs:** Comprehensive cover for daily runners. "Insure a new Taxi" with us for best rates.
*   **Buses:** School buses, staff buses, and public transport buses. Safety is paramount here.
*   **Auto Rickshaws:** Essential cover for three-wheelers.

### 🚚 Goods Carrying Vehicles (GCV)
*   **Light Commercial Vehicles (LCV):** Intra-city transport like **Tata Ace, Mahindra Bolero Pickup**.
*   **Medium & Heavy Duty Trucks:** Long-haul transporters like **Tata Signa, Tata Prima, and BharatBenz**.
*   **Construction Equipment:** Tippers, Dumpers, Cranes, JCBs.

---

## Specialized Coverage
### For Truck Owners (Tata / BharatBenz)
We offer specialized plans covering:
*   **Tata Commercial Vehicles:** From the reliable *Tata Ace* to the powerful *Tata Prima*, we have specific add-ons for the entire range.
*   **Daimler / BharatBenz:** Premium coverage for these high-tech vehicles, ensuring genuine parts replacement and specialized service.

### Choose the Right Vehicle for Your Business
*   **Last Mile Delivery:** Go for LCVs (minitrucks).
*   **Regional Haul:** Medium-Duty trucks are efficient.
*   **Long Haul:** Heavy-Duty trucks with sleeper cabins and advanced safety.

---

## What Does the Policy Cover?
1.  **Accidents:** Damage due to collision, overturning, or derailment.
2.  **Fire & Theft:** Protection against fire, explosion, and total theft of the vehicle.
3.  **Natural & Man-Made Calamities:** Floods, earthquakes, riots, vandalism.
4.  **Third-Party Liability:** Unlimited liability for death/injury and up to ₹7.5 Lakhs for property damage.
5.  **Personal Accident:** Cover for driver and cleaner.

## Why Compliance is Critical?
Operating a commercial vehicle without valid insurance and permits is a serious offence. It can lead to:
*   Heavy Fines
*   Seizure of Vehicle
*   License Suspension

**Get a Quote Today!** We offer Fleet Discounts for owners with multiple vehicles.
    `
    },
    {
        slug: 'policy-renewal',
        title: 'Policy Renewal',
        icon: RefreshCw,
        shortDesc: "Instant renewal for expired policies with minimal paperwork.",
        metaDescription: "Instant Car and Bike Insurance Renewal Online. Renew expired policies easily. Inspection support for break-in cases.",
        keywords: "insurance renewal, policy renewal, expired car insurance, break-in insurance, renew bike insurance online",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        content: `
# Instant Policy Renewal Service

Forgot to renew your policy? Don't worry. Driving with an expired policy is illegal and risky. We specialize in quick renewals for lapsed policies.

## Existing Policy (Not Expired)
*   **Instant Renewal:** No inspection needed.
*   **NCB Retention:** Keep your No Claim Bonus intact.
*   **Better Rates:** We compare current market rates to see if we can get you a better deal than your current insurer.

## Expired Policy (Break-in Case)
If your policy has expired (even for one day):
1.  **Vehicle Inspection:** A digital or physical inspection may be required.
2.  **No Claim Bonus:** You might lose your NCB if the policy is expired for more than 90 days.
3.  **Process:** We handle the coordination for inspection and get your policy issued immediately after approval.

**Don't wait. Send us your previous policy copy on WhatsApp now for an instant quote.**
    `
    },
    {
        slug: 'third-party',
        title: 'Comprehensive & Third Party',
        icon: ShieldPlus,
        shortDesc: "Choose between full protection or liability-only coverage.",
        metaDescription: "Understand the difference between Comprehensive and Third Party Insurance. Choose the right plan for your vehicle.",
        keywords: "comprehensive insurance, third party insurance, liability only policy, od cover, bumper to bumper",
        heroImage: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=2070&auto=format&fit=crop",
        content: `
# Comprehensive vs. Third-Party Liability Insurance

Choosing the right type of insurance is the first step in smart financial planning for your vehicle—whether it's a bike, car, or commercial truck. Here is a detailed comparison to help you decide.

## Comparison Chart
| Feature | Third-Party Liability | Comprehensive Package | Own Damage Only |
| :--- | :---: | :---: | :---: |
| **Damages to Third-Party Property** | ✅ Covered | ✅ Covered | ❌ Not Covered |
| **Adjust to Third-Party Person** | ✅ Covered | ✅ Covered | ❌ Not Covered |
| **Accidental Damages to Your Vehicle** | ❌ Not Covered | ✅ Covered | ✅ Covered |
| **Theft of Your Vehicle** | ❌ Not Covered | ✅ Covered | ✅ Covered |
| **Damage due to Fire/Explosion** | ❌ Not Covered | ✅ Covered | ✅ Covered |
| **Natural Calamities (Flood, Cyclone)** | ❌ Not Covered | ✅ Covered | ✅ Covered |
| **Personal Accident Cover (Owner-Driver)** | ✅ Mandatory | ✅ Mandatory | ❌ Not Covered |

## Detailed Breakdown

### 1. Third-Party Liability Only (Act Only)
*   **Mandatory:** Yes, by law (Motor Vehicles Act).
*   **What it Covers:** Legal liability for injury, death, or property damage caused to a third party by your vehicle.
*   **What it Misses:** Any damage to *your* vehicle. If you crash, you pay for your own repairs.
*   **Best For:** Old vehicles with low market value.

### 2. Comprehensive Package Policy
*   **Recommended For:** All vehicle owners seeking peace of mind.
*   **What it Covers:**
    *   **Own Damage:** Accidents, Fire, Theft, Natural Disasters.
    *   **Third-Party Liability:** Complete legal protection.
    *   **Personal Accident:** Coverage for the owner-driver.
*   **Add-ons:** Eligible for add-ons like Zero Depreciation, Engine Protect, etc.

### 3. Own Damage (OD) Only
*   **Purpose:** Determine to protect your vehicle *if* you already have a separate long-term Third-Party policy.
*   **Note:** You cannot drive legally with *only* an OD policy; you must have a valid TP policy as well.

## What is Generally Excluded?
Across all vehicle types (2-wheeler, 4-wheeler), standard policies do *not* cover:
*   **Normal Wear & Tear:** Aging of the vehicle.
*   **Mechanical/Electrical Breakdown:** Failure of parts not due to an accident.
*   **Driving Under Influence:** Alcohol or drugs.
*   **Driving Without License:** Invalid or expired license.
*   **Consequential Loss:** Damage caused by driving the vehicle *after* an accident (e.g., driving with oil leakage).
    `
    }
];
