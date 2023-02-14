/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/check/diff-snapshots.js TAP different headers > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The following repo files need to be added:

  header.txt
  nocomment.txt
  noheader.txt

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP json delete > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The repo file target.json needs to be updated:

  target.json
  ========================================
  "//@npmcli/template-oss" is missing, expected "This file is automatically added by @npmcli/template-oss. Do not edit."
  "a" is 1, expected to be removed
  "b" is missing, expected 2

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP json merge > initial check 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The repo file target.json needs to be updated:

  target.json
  ========================================
  "//@npmcli/template-oss" is missing, expected "This file is partially managed by @npmcli/template-oss. Edits may be overwritten."
  "b" is missing, expected 1

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP json overwrite > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The repo file target.json needs to be updated:

  target.json
  ========================================
  "//@npmcli/template-oss" is missing, expected "This file is automatically added by @npmcli/template-oss. Do not edit."
  "b" is missing, expected 1

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP unknown file type > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The following repo files need to be added:

  target.txt

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP update and remove errors > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The repo file audit.yml needs to be updated:

  .github/workflows/audit.yml
  ========================================
  [@npmcli/template-oss ERROR] There was an erroring getting the target file
  [@npmcli/template-oss ERROR] Error: {{ROOT}}/test/check/tap-testdir-diff-snapshots-update-and-remove-errors/.github/workflows/audit.yml
  
  YAMLParseError: Implicit keys need to be on a single line at line 57, column 1:
  
            check-id: \${{ steps.check.outputs.check-id }}
  >>>>I HOPE THIS IS NOT VALID YAML<<<<<<<<<<<
  ^
  
  YAMLParseError: Block scalar header includes extra characters: >>>>I at line 57, column 2:
  
  >>>>I HOPE THIS IS NOT VALID YAML<<<<<<<<<<<
   ^
  
  YAMLParseError: Not a YAML token: HOPE THIS IS NOT VALID YAML<<<<<<<<<<< at line 57, column 7:
  
  >>>>I HOPE THIS IS NOT VALID YAML<<<<<<<<<<<
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  YAMLParseError: Implicit map keys need to be followed by map values at line 57, column 1:
  
            check-id: \${{ steps.check.outputs.check-id }}
  >>>>I HOPE THIS IS NOT VALID YAML<<<<<<<<<<<
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  Document with errors cannot be stringified
  [@npmcli/template-oss ERROR] It will be overwritten with the following source:
  ----------------------------------------
  # This file is automatically added by @npmcli/template-oss. Do not edit.
  
  name: Audit
  
  on:
    workflow_dispatch:
    workflow_call:
      inputs:
        ref:
          type: string
        force:
          type: boolean
        check-sha:
          type: string
    schedule:
      # "At 09:00 UTC (01:00 PT) on Monday" https://crontab.guru/#0_9_*_*_1
      - cron: "0 9 * * 1"
  
  jobs:
    audit:
      name: Audit Dependencies
      if: github.repository_owner == 'npm' && !(!inputs.force && github.event_name == 'pull_request' && ((startsWith(github.head_ref, 'dependabot/') && contains(github.head_ref, '/npm-cli/template-oss')) || startsWith(github.head_ref, 'release/v*')))
      runs-on: ubuntu-latest
      defaults:
        run:
          shell: bash
      steps:
        - name: Checkout
          uses: actions/checkout@v3
          with:
            ref: \${{ inputs.ref }}
  
        - name: Create Check
          uses: ./.github/actions/create-check
          if: inputs.check-sha
          id: check
          with:
            sha: \${{ inputs.check-sha }}
            token: \${{ secrets.GITHUB_TOKEN }}
            job-name: Audit Dependencies
  
        - name: Setup
          uses: ./.github/actions/setup
          with:
            deps-flags: "--package-lock"
  
        - name: Audit
          uses: ./.github/actions/audit
  
        - name: Conclude Check
          uses: ./.github/actions/conclude-check
          if: steps.check.outputs.check-id && (success() || failure())
          with:
            token: \${{ secrets.GITHUB_TOKEN }}
            conclusion: \${{ job.status }}
            check-id: \${{ steps.check.outputs.check-id }}
  

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------

The repo file ci.yml needs to be updated:

  .github/workflows/ci.yml
  ========================================
  @@ -135,4 +135,24 @@
             shell: \${{ matrix.platform.shell }}
   
         - name: Get Changed Workspaces
           if: steps.continue-matrix.outputs.result
  +        id: workspaces
  +        uses: ./.github/actions/changed-workspaces
  +        with:
  +          token: \${{ secrets.GITHUB_TOKEN }}
  +          files: \${{ (inputs.all && '--all') || '' }}
  +
  +      - name: Test
  +        if: steps.continue-matrix.outputs.result
  +        uses: ./.github/actions/test
  +        with:
  +          flags: \${{ steps.workspaces.outputs.flags }}
  +          shell: \${{ matrix.platform.shell }}
  +
  +      - name: Conclude Check
  +        uses: ./.github/actions/conclude-check
  +        if: steps.check.outputs.check-id && (success() || failure())
  +        with:
  +          token: \${{ secrets.GITHUB_TOKEN }}
  +          conclusion: \${{ job.status }}
  +          check-id: \${{ steps.check.outputs.check-id }}

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------

The following module files need to be deleted:

  .eslintrc.json

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------

The following module files need to be added:

  .npmrc

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`

exports[`test/check/diff-snapshots.js TAP will diff json > expect resolving Promise 1`] = `
Some problems were detected:

-------------------------------------------------------------------

The module file package.json needs to be updated:

  package.json
  ========================================
  "author" is "heynow", expected "GitHub Inc."
  "files[1]" is "x", expected "lib/"
  "scripts.lint:fix" is "x", expected to be removed
  "scripts.preversion" is "x", expected to be removed
  "standard" is {
    "config": "x "
  }, expected to be removed
  "templateVersion" is "1", expected to be removed

To correct it: npx template-oss-apply --force

-------------------------------------------------------------------
`
