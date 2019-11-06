/* globals omitTerms, respecConfig, $, require */
/* exported linkCrossReferences, restrictReferences, fixIncludes */

var didwg = {
  // Add as the respecConfig localBiblio variable
  // Extend or override global respec references
  localBiblio: {
    "DID-CORE": {
      title: "Decentralized Identifiers",
      href: "https://w3c.github.io/did-core/",
      authors: [
        "Drummond Reed",
        "Manu Sporny",
        "Dave Longley",
        "Christopher Allen",
        "Ryan Grant",
        "Markus Sabadello"
      ],
      status: "Editor's Draft",
      publisher: "Decentralized Identifier Working Group"
    },
    "DID-RESOLUTION": {
      title: "Decentralized Identifier Resolution",
      href: "https://w3c-ccg.github.io/did-resolution/",
      authors: [
        "Markus Sabadello",
        "Dmitri Zagidulin"
      ],
      status: "Draft Community Group Report",
      publisher: "Credentials Community Group"
    },
    "DID-AUTH-INTRO": {
      title: "Introduction to DID Auth",
      href: "https://github.com/WebOfTrustInfo/rwot6-santabarbara/blob/master/final-documents/did-auth.md",
      authors: [
        "Markus Sabadello",
        "Dmitri Zagidulin",
        "Kyle Den Hartog",
        "Christian Lundkvist",
        "Cedric Franz",
        "Alberto Elias",
        "Andrew Hughes",
        "John Jordan",
        "Dmitri Zagidulin"
      ],
      status: "Final Paper",
      publisher: "Rebooting the Web of Trust"
    },
    "DID-AUTH-OIDC-SIOP": {
      title: "DID Auth profile for OpenID Connect",
      href: "https://github.com/decentralized-identity/papers/blob/master/did-authn/siop/did-authn-siop-profile.md",
      authors: [
        "Oliver Terbu"
      ],
      status: "Draft",
      publisher: "Decentralized Identity Foundation"
    },
    "CREDENTIAL-HANDLER-API": {
      title: "Credential Handler API",
      href: "https://w3c-ccg.github.io/credential-handler-api/",
      authors: [
        "Dave Longley",
        "Manu Sporny"
      ],
      status: "Editor's Draft",
      publisher: "Credentials Community Group"
    }
  }
};
