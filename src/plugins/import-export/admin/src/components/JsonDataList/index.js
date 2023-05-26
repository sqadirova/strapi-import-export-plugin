import { JSONInput } from '@strapi/design-system';

export default function TodoTable({entries}) {
  return (
    <JSONInput value={entries} />
  );
}
