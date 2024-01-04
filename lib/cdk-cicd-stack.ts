import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'TestPipeline', {
      pipelineName: 'TestPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('markjdvs/cdk-cicd', 'cicd-poc'),
        commands: [
          'npm ci',
          'npx cdk synth',
        ],
        primaryOutputDirectory: '/cdk.out', // not needed here but useful
      }),
    });
  }
}
