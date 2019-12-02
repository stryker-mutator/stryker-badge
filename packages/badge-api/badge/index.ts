import 'source-map-support/register';
import { AzureFunction } from '@azure/functions';
import { ShieldMapper } from './ShieldMapper';
import { createMutationTestingReportMapper } from '@stryker-mutator/dashboard-data-access';
import { handler } from './handler';

const httpTrigger: AzureFunction = handler(new ShieldMapper(createMutationTestingReportMapper()));
export default httpTrigger;
