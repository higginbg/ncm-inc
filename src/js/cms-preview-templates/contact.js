import React from "react";

const ContactEntry = ({ heading, text }) =>
  <div class="w-50-ns w-100">
    <h4 className="f4 lh-title mb2">{ heading }</h4>
    <p>{ text }</p>
  </div>;

const ContactEntries = ({ data }) => data && data.length > 0
    ? <div class="bg-white pv4">
        <div className="flex flex-row flex-wrap mw6 center">
          {data.map(({heading, text}) => <ContactEntry heading={heading} text={text} />)}
        </div>
      </div>
    : "";

const ContactPreview = ({ entry, getAsset, widgetFor }) => {
  const entryContactEntries = entry.getIn(["data", "contact_entries"]);
  const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];

  return <div className="pv4">
    <div class="pv4 ph3 mw6 center">
      <h1 class='f2 tc lh-title mb3'>{entry.getIn(["data", "heading"])}</h1>
      { widgetFor("body") }
    </div>
    <ContactEntries data={contactEntries} />
  </div>;
};

export default ContactPreview;
