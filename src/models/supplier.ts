export interface Supplier {
  id: number;
  name: string;
  website?: string;
}

const defaultSupplier: Readonly<Supplier> = Object.freeze({
  id: -1,
  name: 'Unknown',
});

export function createSupplier(overrides?: Partial<Supplier>): Supplier {
  return {
    ...defaultSupplier,
    ...overrides,
  };
}
