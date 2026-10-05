import { VenueInfo } from "@/types/conference";

export const venueData: VenueInfo = {
  name: "Geneva International Conference Centre (CICG)",
  address: "17 rue Varembé, CP 13, 1211 Genève 20",
  city: "Geneva",
  country: "Switzerland",
  description:
    "Situated just steps away from the United Nations headquarters, CICG offers state-of-the-art auditorium spaces, high-speed fiber connectivity, simultaneous translation booths, and modern exhibition halls.",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.718697672207!2d6.137452315580666!3d46.22502697911762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64e52ddaa677%3A0x6b6c2303c6ef11d5!2sCICG!5e0!3m2!1sen!2sch!4v1680000000000!5m2!1sen!2sch",
  transportation: [
    {
      type: "Air Travel (Geneva Airport - GVA)",
      details: "Geneva Airport is just 5 km from the venue. Free 80-minute public transport tickets are available at the airport baggage area."
    },
    {
      type: "Train (Geneva Cornavin Station)",
      details: "Direct train connections from Paris (3h), Zurich (2.5h), and Milan (4h). Take Bus 5 or Tram 15 directly to the venue."
    },
    {
      type: "Local Trams & Buses",
      details: "Tram 15 (Stop: Nations or Sismondi) and Bus lines 5, 8, 11 stop right outside CICG."
    }
  ],
  accommodation: [
    {
      name: "InterContinental Geneva",
      distance: "0.4 km (5 min walk)",
      rating: "5 Star Partner Hotel",
      url: "https://example.com"
    },
    {
      name: "Hotel Eden Geneva",
      distance: "1.1 km (12 min walk / 3 min tram)",
      rating: "4 Star Partner Hotel",
      url: "https://example.com"
    },
    {
      name: "Ibis Budget Geneve Petit-Lancy",
      distance: "3.5 km (Direct Bus 5)",
      rating: "Budget Friendly Option",
      url: "https://example.com"
    }
  ]
};
