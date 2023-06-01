import React from 'react';
import {JSONInput} from '@strapi/design-system';
import {TextInput} from "@strapi/design-system";


export default function JsonDataList({entries}) {
  return (
    <JSONInput value={JSON.stringify(entries)}/>
  );
}

export function JsonDataInput({value, onChange}) {
  return (
    <JSONInput value={value} label="JSON" editable hint="Description Text" onChange={onChange} />

    // <TextInput
    //   type="text"
    //   aria-label="data-input"
    //   name="data-input"
    //   error={value.length > 40 ? "Text should be less than 40 characters" : ""}
    //   onChange={onChange}
    //   value={value}
    // />
  );
}
