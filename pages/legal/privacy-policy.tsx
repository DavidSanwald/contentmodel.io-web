import catchify from 'catchify';
import { getSnapshot } from 'mobx-state-tree';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import Footer from '@/src/features/footer/Footer';
import Header from '@/src/features/header/components/Header/Header';
import getCurrentUser from '@/src/features/user/api/getCurrentUser';
import styles from '@/src/shared/components/StyledDynamicContent/StyledDynamicContent.module.css';
import optimizeLineBreak from '@/src/typography/optimize-line-break';
import { initializeStore, StoreSnapshotInterface } from '@/store';
import { StoreProvider } from '@/store/hooks';

export const getServerSideProps: GetServerSideProps<{
  storeSnapshot: StoreSnapshotInterface;
}> = async (ctx) => {
  const store = initializeStore();

  const [currentUserError, currentUser] = await catchify(
    getCurrentUser(ctx.req.headers.cookie),
  );

  if (currentUserError === null) {
    store.setMe(currentUser.me);
  }

  return {
    props: {
      storeSnapshot: getSnapshot(store),
    },
  };
};

const PrivacyPolicyPage: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ storeSnapshot }) => {
  const store = initializeStore(storeSnapshot);

  return (
    <StoreProvider store={store}>
      <Head>
        <title key="title">Privacy Policy - ContentModel.io</title>
        <meta
          property="og:title"
          content="Privacy Policy - ContentModel.io"
          key="og:title"
        />
      </Head>
      <Header />
      <main className="w-full max-w-screen-2xl mx-auto px-3 mb-8 xl:flex xl:mt-12">
        <div className="w-full max-w-xl mt-8 mx-auto flex-shrink-0">
          <h1 className="text-2xl font-bold text-center">
            {optimizeLineBreak('ContentModel.io Privacy Policy')}
          </h1>
          <p className="text-gray-900 mt-6 lg:mt-8 lg:text-l xl:text-xl">
            <b>Note:</b> In general, we will only collect the data that we
            absolutely need from you. At any time you can ask for details we
            have on you (no matter whether you are in EU or not).
          </p>
          <div className={styles.content}>
            <p>
              Thank you for choosing to be part of our community at
              ContentModel.io, owner Ante Šepić, Berlin, Germany. We are
              committed to protecting your personal information and your right
              to privacy. If you have any questions or concerns about our
              policy, or our practices with regards to your personal
              information, please contact us at hello@contentmodel.io.
            </p>
            <p>
              When you visit our website https://contentmodel.io, and use our
              services, you trust us with your personal information. We take
              your privacy very seriously. In this privacy policy, we seek to
              explain to you in the clearest way possible what information we
              collect, how we use it and what rights you have in relation to it.
              We hope you take some time to read through it carefully, as it is
              important. If there are any terms in this privacy policy that you
              do not agree with, please discontinue use of our Sites and our
              services.
            </p>
            <p>
              This privacy policy applies to all information collected through
              our website (such as https://contentmodel.io), and/or any related
              services, sales, marketing or events (we refer to them
              collectively in this privacy policy as the &quot;Services&quot;).
            </p>
            <p>
              Please read this privacy policy carefully as it will help you make
              informed decisions about sharing your personal information with
              us.
            </p>

            <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>

            <h3>Personal information you disclose to us</h3>
            <p>
              In Short: We collect personal information that you provide to us
              such as name, address, contact information, passwords and security
              data, payment information, and social media login data.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when registering at the Services expressing an interest in
              obtaining information about us or our products and services, when
              participating in activities on the Services or otherwise
              contacting us.
            </p>
            <p>
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make
              and the products and features you use. The personal information we
              collect can include the following:
            </p>
            <p>
              Publicly Available Personal Information. We collect first name,
              maiden name, last name, and nickname; email addresses; and other
              similar data.
            </p>
            <p>
              Credentials. We may collect passwords, password hints, and similar
              security information used for authentication and account access.
            </p>
            <p>
              Payment Data. We collect data necessary to process your payment if
              you make purchases, such as your payment instrument number (such
              as a credit card number), and the security code associated with
              your payment instrument. All payment data is stored by Paddle.com
              Market Limited. You may find their privacy policy link(s) here:
              https://paddle.com/privacy/.
            </p>
            <p>
              Social Media Login Data. We may provide you with the option to
              register using social media account details, like your Google or
              other social media account. If you choose to register in this way,
              we will collect the Information described in the section called
              &quot;HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; below.
            </p>
            <p>
              All personal information that you provide to us must be true,
              complete and accurate, and you must notify us of any changes to
              such personal information.
            </p>

            <h3>Information automatically collected</h3>
            <p>
              In Short: Some information — such as IP address and/or browser and
              device characteristics — is collected automatically when you visit
              our Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>
            <p>
              Online Identifiers. We collect tools and protocols, such as IP
              (Internet Protocol) addresses; cookie identifiers, or others such
              as the ones used for analytics and marketing; devices; and other
              similar data.
            </p>

            <h2>2. HOW DO WE USE YOUR INFORMATION?</h2>
            <p>
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </p>
            <p>
              We use personal information collected via our Services for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below.
            </p>
            <p>We use the information we collect or receive:</p>
            <ul>
              <li>
                To facilitate account creation and logon process. If you choose
                to link your account with us to a third party account (such as
                your Google or Contentful account), we use the information you
                allowed us to collect from those third parties to facilitate
                account creation and logon process for the performance of the
                contract. See the section below headed &quot;HOW DO WE HANDLE
                YOUR SOCIAL LOGINS&quot; for further information.
              </li>
              <li>
                To send you marketing and promotional communications. We and/or
                our third party marketing partners may use the personal
                information you send to us for our marketing purposes, if this
                is in accordance with your marketing preferences. You can
                opt-out of our marketing emails at any time (see the &quot;WHAT
                ARE YOUR PRIVACY RIGHTS&quot; below).
              </li>
              <li>
                Fulfill and manage your orders. We may use your information to
                fulfill and manage your orders, payments, returns, and exchanges
                made through the Services.
              </li>
              <li>
                Request Feedback. We may use your information to request
                feedback and to contact you about your use of our Services.
              </li>
              <li>
                To protect our Services. We may use your information as part of
                our efforts to keep our Services safe and secure (for example,
                for fraud monitoring and prevention).
              </li>
              <li>
                To enforce our terms, conditions and policies for Business
                Purposes, Legal Reasons and Contractual.
              </li>
              <li>
                To respond to legal requests and prevent harm. If we receive a
                subpoena or other legal request, we may need to inspect the data
                we hold to determine how to respond.
              </li>
              <li>
                To manage user accounts. We may use your information for the
                purposes of managing our account and keeping it in working
                order.
              </li>
              <li>
                To deliver services to the user. We may use your information to
                provide you with the requested service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may use
                your information to respond to your inquiries and solve any
                potential issues you might have with the use of our Services.
              </li>
            </ul>

            <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
            <p>
              n Short: We only share information with your consent, to comply
              with laws, to provide you with services, to protect your rights,
              or to fulfill business obligations.
            </p>
            <p>
              We may process or share data based on the following legal basis:
            </p>
            <ul>
              <li>
                Consent: We may process your data if you have given us specific
                consent to use your personal information in a specific purpose.
              </li>
              <li>
                Legitimate Interests: We may process your data when it is
                reasonably necessary to achieve our legitimate business
                interests.
              </li>
              <li>
                Performance of a Contract: Where we have entered into a contract
                with you, we may process your personal information to fulfill
                the terms of our contract.
              </li>
              <li>
                Legal Obligations: We may disclose your information where we are
                legally required to do so in order to comply with applicable
                law, governmental requests, a judicial proceeding, court order,
                or legal process, such as in response to a court order or a
                subpoena (including in response to public authorities to meet
                national security or law enforcement requirements).
              </li>
              <li>
                Vital Interests: We may disclose your information where we
                believe it is necessary to investigate, prevent, or take action
                regarding potential violations of our policies, suspected fraud,
                situations involving potential threats to the safety of any
                person and illegal activities, or as evidence in litigation in
                which we are involved.
              </li>
            </ul>
            <p>
              More specifically, we may need to process your data or share your
              personal information in the following situations:
            </p>
            <ul>
              <li>
                Vendors, Consultants and Other Third-Party Service Providers. We
                may share your data with third party vendors, service providers,
                contractors or agents who perform services for us or on our
                behalf and require access to such information to do that work.
                Examples include: payment processing, data analysis, email
                delivery, hosting services, customer service and marketing
                efforts. We may allow selected third parties to use tracking
                technology on the Services, which will enable them to collect
                data about how you interact with the Services over time. This
                information may be used to, among other things, analyze and
                track data, determine the popularity of certain content and
                better understand online activity. Unless described in this
                Policy, we do not share, sell, rent or trade any of your
                information with third parties for their promotional purposes.
                We have contracts in place with our data processors. This means
                that they cannot do anything with your personal information
                unless we have instructed them to do it. They will not share
                your personal information with any organisation apart from us.
                They will hold it securely and retain it for the period we
                instruct.
              </li>
              <li>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
            </ul>

            <h2>4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
            <p>
              In Short: We only share information with the following third
              parties.
            </p>
            <p>
              We only share and disclose your information with the following
              third parties. We have categorized each party so that you may be
              easily understand the purpose of our data collection and
              processing practices. If we have processed your data based on your
              consent and you wish to revoke your consent, please contact us.
            </p>
            <ul>
              <li>
                Allow Users to Connect to their Third-Party Accounts: Google
                account and Contentful account
              </li>
              <li>Cloud Computing Services: Amazon Web Services (AWS)</li>
              <li>Communicate and Chat with Users: Mailjet</li>
              <li>
                Functionality and Infrastructure Optimization: Amazon Web
                Services
              </li>
              <li>Invoice and Billing Paddle</li>
              <li>User Account Registration and Authentication: Auth0</li>
              <li>
                Web and Mobile Analytics: Plausible (privacy friendly analytics)
              </li>
            </ul>

            <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p>
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Policy.
            </p>

            <h2>6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
            <p>
              In Short: If you choose to register or log in to our services
              using a social media account, we may have access to certain
              information about you.
            </p>
            <p>
              Our Services offer you the ability to register and login using
              your third party social media account details (like your Google or
              Contentful logins). Where you choose to do this, we will receive
              certain profile information about you from your social media
              provider. The profile Information we receive may vary depending on
              the social media provider concerned, but will often include your
              name, e-mail address, friends list, profile picture as well as
              other information you choose to make public.
            </p>
            <p>
              We will use the information we receive only for the purposes that
              are described in this privacy policy or that are otherwise made
              clear to you on the Services. Please note that we do not control,
              and are not responsible for, other uses of your personal
              information by your third party social media provider. We
              recommend that you review their privacy policy to understand how
              they collect, use and share your personal information, and how you
              can set your privacy preferences on their sites and apps.
            </p>

            <h2>7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
            <p>
              In Short: We may transfer, store, and process your information in
              countries other than your own.
            </p>
            <p>
              Our servers are located in France. If you are accessing our
              Services from outside France, please be aware that your
              information may be transferred to, stored, and processed by us in
              our facilities and by those third parties with whom we may share
              your personal information (see &quot;WILL YOUR INFORMATION BE
              SHARED WITH ANYONE?&quot; above), in United States, United
              Kingdom, and other countries.
            </p>
            <p>
              f you are a resident in the European Economic Area, then these
              countries may not have data protection or other laws as
              comprehensive as those in your country. We will however take all
              necessary measures to protect your personal information in
              accordance with this privacy policy and applicable law.
            </p>

            <h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy policy unless
              otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              policy will require us keeping your personal information for
              longer than the period of time in which users have an account with
              us.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize it, or,
              if this is not possible (for example, because your personal
              information has been stored in backup archives), then we will
              securely store your personal information and isolate it from any
              further processing until deletion is possible.
            </p>

            <h2>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p>
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <p>
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, please also remember that we
              cannot guarantee that the internet itself is 100% secure. Although
              we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the services within a
              secure environment.
            </p>

            <h2>10. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we have collected from children
              under age 18, please contact us at hello@contentmodel.io.
            </p>

            <h2>11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p>
              In Short: In some regions, such as the European Economic Area, you
              have rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </p>
            <p>
              In some regions (like the European Economic Area), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information; and
              (iv) if applicable, to data portability. In certain circumstances,
              you may also have the right to object to the processing of your
              personal information. To make such a request, please use the
              contact details provided below. We will consider and act upon any
              request in accordance with applicable data protection laws.
            </p>
            <p>
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal.
            </p>
            <p>
              If you are resident in the European Economic Area and you believe
              we are unlawfully processing your personal information, you also
              have the right to complain to your local data protection
              supervisory authority. You can find their contact details here:
              http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at hello@contentmodel.io.
            </p>

            <h3>Account Information</h3>
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <ul>
              <li>
                Log into your account settings and update your user account.
              </li>
              <li>Contact us using the contact information provided.</li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, some information may be retained in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our Terms of Use and/or comply with legal requirements.
            </p>
            <p>
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Services. To opt-out of
              interest-based advertising by advertisers on our Services visit
              http://www.aboutads.info/choices/.
            </p>
            <p>
              Opting out of email marketing: You can unsubscribe from our
              marketing email list at any time by clicking on the unsubscribe
              link in the emails that we send or by contacting us using the
              details provided below. You will then be removed from the
              marketing email list – however, we will still need to send you
              service-related emails that are necessary for the administration
              and use of your account. To otherwise opt-out, you may:
            </p>
            <ul>
              <li>Access your account settings and update preferences.</li>
            </ul>

            <h2>12. DATA BREACH</h2>
            <p>
              A privacy breach occurs when there is unauthorized access to or
              collection, use, disclosure or disposal of personal information.
              You will be notified about data breaches when ContentModel.io,
              owner Ante Šepić, Berlin, Germany believes you are likely to be at
              risk or serious harm. For example, a data breach may be likely to
              result in serious financial harm or harm to your mental or
              physical well-being. In the event that ContentModel.io, owner Ante
              Šepić, Berlin, Germany becomes aware of a security breach which
              has resulted or may result in unauthorized access, use or
              disclosure of personal information ContentModel.io, owner Ante
              Šepić, Berlin, Germany will promptly investigate the matter and
              notify the applicable Supervisory Authority not later than 72
              hours after having become aware of it, unless the personal data
              breach is unlikely to result in a risk to the rights and freedoms
              of natural persons.
            </p>

            <h2>13. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. No
              uniform technology standard for recognizing and implementing DNT
              signals has been finalized. As such, we do not currently respond
              to DNT browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this privacy policy.
            </p>

            <h2>14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p>
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the “Shine
              The Light” law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a
              registered account with the Services, you have the right to
              request removal of unwanted data that you publicly post on the
              Services. To request removal of such data, please contact us using
              the contact information provided below, and include the email
              address associated with your account and a statement that you
              reside in California. We will make sure the data is not publicly
              displayed on the Services, but please be aware that the data may
              not be completely or comprehensively removed from our systems.
            </p>

            <h2>15. DO WE MAKE UPDATES TO THIS POLICY?</h2>
            <p>
              In Short: Yes, we will update this policy as necessary to stay
              compliant with relevant laws.
            </p>
            <p>
              We may update this privacy policy from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy policy, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy policy frequently to be informed of how we are
              protecting your information.
            </p>

            <h2>16. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
            <p>
              If you have questions or comments about this policy, you may email
              us at hello@contentmodel.io
            </p>

            <h2>
              How can you review, update, or delete the data we collect from
              you?
            </h2>
            <p>
              Based on the laws of some countries, you may have the right to
              request access to the personal information we collect from you,
              change that information, or delete it in some circumstances. To
              request to review, update, or delete your personal information,
              please submit a request via hello@contentmodel.io. We will respond
              to your request within 30 days.
            </p>

            <p>
              This privacy policy was created using{' '}
              <a
                href="https://termly.io/products/privacy-policy-generator/?ftseo"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Termly&apos;s Privacy Policy Generator
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </StoreProvider>
  );
};

export default PrivacyPolicyPage;
