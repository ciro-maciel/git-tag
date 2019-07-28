package main

import (
	"fmt"
	"os"
	"reflect"
)

// AppendIfMissing ...
// https://stackoverflow.com/questions/9251234/go-append-if-unique
func AppendIfMissing(array interface{}, element interface{}) interface{} {
	if reflect.ValueOf(array).IsNil() {
		fmt.Fprintf(os.Stderr, "array not initialized\n")
		return nil
	}

	switch reflect.TypeOf(array).Kind() {
	case reflect.Slice:
		arrayV := reflect.ValueOf(array)
		arrayVLen := arrayV.Len()
		if arrayVLen == 0 { //if make len == 0
			sliceNew := reflect.MakeSlice(reflect.ValueOf(array).Type(), 1, 1)
			if sliceNew.Index(0).Type() != reflect.ValueOf(element).Type() {
				fmt.Fprintf(os.Stderr, "types are not same\n")
				return sliceNew.Interface()
			}

			sliceNew.Index(0).Set(reflect.ValueOf(element))
			return sliceNew.Interface()
		}
		for i := 0; i < arrayVLen; i++ {
			if i == 0 && reflect.ValueOf(element).Kind() != arrayV.Index(i).Kind() {
				fmt.Fprintf(os.Stderr, "types are not same\n")
				return array
			}
			if arrayV.Index(i).Interface() == element {
				return array
			}
		}
	default:
		fmt.Fprintf(os.Stderr, "first element is not array\n")
		return array
	}

	arrayV := reflect.ValueOf(array)
	elementV := reflect.ValueOf(element)
	appendAE := reflect.Append(arrayV, elementV)

	return appendAE.Interface()
}
