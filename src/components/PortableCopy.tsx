import { PortableText } from '@portabletext/react';
import { Bracket } from '../design-system/components/Bracket';
import type { PortableBlock } from '../lib/sanity';

export function PortableCopy({ value }: { value: PortableBlock[] }) {
  return <PortableText value={value as Parameters<typeof PortableText>[0]['value']} components={{
    marks: { bracket: ({ children }) => <Bracket>{children}</Bracket> },
  }} />;
}
