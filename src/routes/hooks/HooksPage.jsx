import React from "react";
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseMemo from './UseMemo';
import UseMyHook from './UseMyHook';
import UseReduce from './UseReduce';
import UseRef from './UseRef';
import { useLoaderData } from "react-router-dom";


export default function HooksPage() {
  const contact = useLoaderData();

  function hook() {
    if(contact.cod === "state") {
      return <UseState/>
    } else if(contact.cod === "effect") {
      return <UseEffect/>
    }
    else if(contact.cod === "callback") {
      return <UseCallback/>
    }
    else if(contact.cod === "context") {
      return <UseContext/>
    }
    else if(contact.cod === "memo") {
      return <UseMemo/>
    }
    else if(contact.cod === "myhook") {
      return <UseMyHook/>
    }
    else if(contact.cod === "reduce") {
      return <UseReduce/>
    }
    else if(contact.cod === "ref") {
      return <UseRef/>
    }
  }


    return (
        <>
          {hook()}
        </>
    )
}