import ErrorBoundary from '@/utils/ErrorBoundary';
import React, { ReactNode, Suspense } from 'react';

interface IPromiseHandler {
  PendingComponent: ReactNode;
  RejectComponent: ReactNode;
  FulfilledComponent: ReactNode;
}
const PromiseHandlerComponent = ({
  PendingComponent,
  FulfilledComponent,
  RejectComponent,
}: IPromiseHandler) => {
  return (
    <Suspense fallback={PendingComponent}>
      <ErrorBoundary fallback={RejectComponent}>{FulfilledComponent}</ErrorBoundary>
    </Suspense>
  );
};

export default PromiseHandlerComponent;
