> kushalien420: How would you create an app that tallies together IOU's and "debts" so that it could be deployed and used by me and my friends to track expenses on dinner/parties/groceries etc. I really don't want to do auth since it would make the app much more complex and the use case is really small and concentrated. I would like it to be deployed and easily accessable through a phone or direct link.

* Domain Info
  * IOU
    * I Owe You
* Assumptions
  * No Auth
    * Seamless user onboarding
      * Passwords are combersome...
* Clarifications
  * Web app!
* Existing Payment Platforms
  * Provide payments... but don't have a way to keep track of IOUS
  * Zelle
  * Venmo
  * Paypal
  * CashApp
* Market Research
  * SplitWise
  * Settle Up
  * Splitser
  * Splittr
  * SplittyPie
    * https://github.com/cowbell/splittypie
* Missing in the Market
  * Simple creating with no auth
  * Not splitting just IOU from one person to another

* Technology
  * Generating Random IDs
    * Anyone that knows the ID can access / modify the thing
    * Not guessable
    * https://www.npmjs.com/package/uuid
    * https://www.npmjs.com/package/nanoid
    * CUID - https://www.npmjs.com/package/@paralleldrive/cuid2
  * Hash / Salt some known values

  ```mermaid
  flowchart TD
    A[User Creates Event] -->|generate link with random event id| B(User adds a participant)
    B -->|generate unique id for participant| C(User shares invite link with participant, includes event id and participant id)
  ```