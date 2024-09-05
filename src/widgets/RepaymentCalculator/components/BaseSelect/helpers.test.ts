import { describe, expect, test, vi } from 'vitest'
import { handleChangeWrapper } from './helpers'

describe('BaseSelect', () => {
  test('handleChangeWrapper()', () => {
    const mockEmit = vi.fn()
    const name = 'mock name'
    const value = 'mock value'
    // @ts-expect-error" mock event value
    handleChangeWrapper(mockEmit)(name, { target: { value } })
    expect(mockEmit).toBeCalledWith('selectChange', { name, value })
  })
})
