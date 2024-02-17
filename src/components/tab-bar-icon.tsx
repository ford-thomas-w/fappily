import React from "react";
import { Icon, IconName } from "./icon";
import { FontAwesome } from '@expo/vector-icons';

export type FaIconName = "list-ul" | "dashboard";
const faIcons: string[] = ["list-ul", "dashboard"];

export function makeIcon(name: IconName|FaIconName) {
  return (props: { focused?: boolean; style?: any; color: string }) => (
    <TabBarIcon name={name} {...props} />
  );
}

export function TabBarIcon({
  focused,
  ...props
}: {
  name: IconName | FaIconName;
  focused?: boolean;
  color: string;
  style?: any;
}) {
  let resolvedName: any = props.name;
  if (focused) {
    resolvedName = props.name + "-active";
  }
  let faName: FaIconName;
  let iconName: IconName;
  if (faIcons.includes(props.name)) {
    faName = props.name as FaIconName;
  }

  return <>
    {faName ?
      <FontAwesome name={faName} size={24} color="black" />
      :
      <Icon
        style={[{ width: 22, height: 22 }, props.style]}
        {...props}
        name={resolvedName}
        fill={props.color}
      />
    }
  </>
}
