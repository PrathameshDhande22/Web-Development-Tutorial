import { ResolveFn } from '@angular/router';
import { Apiservice, MockData } from './Services/apiservice';
import { inject } from '@angular/core';

export const userResolverResolver: ResolveFn<MockData | undefined> = (route) => {
  // injecting the service
  const apiservice: Apiservice = inject(Apiservice)
  // getting the id from the parameters
  const id: string | null = route.paramMap.get("id")
  return apiservice.getMockData.find((value) => value.Id === Number(id))
};
