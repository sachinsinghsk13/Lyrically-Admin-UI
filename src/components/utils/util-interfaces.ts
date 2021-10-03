export interface FormState<T> {
    type: 'create' | 'update',
    value: T
}