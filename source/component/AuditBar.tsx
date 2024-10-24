import { FC, observer } from 'web-cell';
import { diffTime } from 'web-utility';
import { Button, ButtonGroup } from 'boot-cell';

import { TimeUnitName } from '../utility';
import { DataItem, Organization } from '../service';
import { session, VerifiableModel } from '../model';

export interface AuditBarProps<T> extends DataItem, Organization {
    scope: string;
    model: VerifiableModel<T>;
}

const TimeStamp: FC<Record<'date' | 'phone' | 'label', string>> = ({
    date,
    phone,
    label
}) => {
    const { distance, unit } = diffTime(date);

    return (
        <time className="d-block small text-center text-muted" dateTime={date}>
            <a href={'tel:' + phone}>{phone}</a> {label}于 {Math.abs(distance)}{' '}
            {TimeUnitName[unit]}前
        </time>
    );
};

export const AuditBar = observer(function <T>(props: AuditBarProps<T>) {
    const {
        createdAt,
        updatedAt,
        creator,
        verified,
        verifier,
        objectId,
        scope,
        model
    } = props;
    const isAdmin = session.hasRole('Admin');
    const authorized = session.user?.objectId === creator.objectId || isAdmin;

    return (
        <>
            <TimeStamp
                label="发布"
                date={createdAt}
                phone={creator.mobilePhoneNumber}
            />
            {verified && (
                <TimeStamp
                    label="审核"
                    date={updatedAt}
                    phone={verifier.mobilePhoneNumber}
                />
            )}
            {authorized && (
                <ButtonGroup className="d-flex mt-2">
                    <Button
                        variant="warning"
                        size="sm"
                        href={scope + '/edit?dataId=' + objectId}
                    >
                        编辑
                    </Button>
                    {isAdmin && !verified && (
                        <Button
                            variant="success"
                            size="sm"
                            onClick={() =>
                                (model as VerifiableModel).verify(objectId)
                            }
                        >
                            审核
                        </Button>
                    )}
                    <Button
                        variant="danger"
                        size="sm"
                        onClick={() => model.deleteOne(objectId)}
                    >
                        删除
                    </Button>
                </ButtonGroup>
            )}
        </>
    );
});
