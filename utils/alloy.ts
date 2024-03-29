import alloy, { Init } from "@alloyidentity/web-sdk";
import { EvaluationData } from "../types/types";

const alloyInitParams: Init = {
  key: process.env.ALLOY_SDK!,
  journeyApplicationToken: "",
  journeyToken: process.env.JOURNEY_TOKEN,
  isNext: true,
  customStyle: {
    theme: {
     },
     componentOverride: {
      PrimaryButton: {
        default: {
          backgroundColor: '#FFFFFF',
          textColor: '#3775cc',
        },
        hover: {
          backgroundColor: '#f27f54'
        },
        focus: {
          border: '1px solid blue'
        }
      },
      HelpBanner: {
        default: {
          backgroundColor: '#f9f9f9',
          textColor: '#212121',
          border: '0.5px solid rgba(0, 0, 0, 0.1)',
        }
      },
      Header: {
        default: {
          border: '0.5px solid rgba(0, 0, 0, 0.1)',
        },
      },
      PhoneInput: {
        default: {
          backgroundColor: '#f9f9f9',
          border: '0.5px solid rgba(0, 0, 0, 0.1)',
        }
      },
      }
}
};
export function initAlloy(
  journeyApplicationToken: string,
  evaluationData?: EvaluationData
) {
  alloyInitParams.journeyApplicationToken = journeyApplicationToken;

  if (evaluationData) {
    const evalData = {
      nameFirst: evaluationData.name_first,
      nameLast: evaluationData.name_last,
      addressLine1: evaluationData.address_line_1,
      addressLine2: "",
      addressCity: evaluationData.address_city,
      addressState: evaluationData.address_state,
      addressPostalCode: evaluationData.address_postal_code,
      addressCountryCode: evaluationData.address_country_code,
      birthDate: evaluationData.birth_date,
      ip_address_v4 : "192.0.0.0"
    };
    alloyInitParams.evaluationData = evalData;
  }
  alloy.init(alloyInitParams);
}

export function closeAlloy() {
  alloy.close();
}

export function openAlloy(cb: any, anchorElementId?: string) {
  console.log("HERE");
  alloy.open(cb, anchorElementId);
}

export function getJourneyToken() {
  return alloyInitParams.journeyToken;
}
