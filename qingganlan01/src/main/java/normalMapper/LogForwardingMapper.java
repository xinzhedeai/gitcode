package normalMapper;

import java.util.List;
import normalPo.LogForwarding;
import normalPo.LogForwardingExample;
import org.apache.ibatis.annotations.Param;

public interface LogForwardingMapper {
    int countByExample(LogForwardingExample example);

    int deleteByExample(LogForwardingExample example);

    int deleteByPrimaryKey(String logId);

    int insert(LogForwarding record);

    int insertSelective(LogForwarding record);

    List<LogForwarding> selectByExample(LogForwardingExample example);

    LogForwarding selectByPrimaryKey(String logId);

    int updateByExampleSelective(@Param("record") LogForwarding record, @Param("example") LogForwardingExample example);

    int updateByExample(@Param("record") LogForwarding record, @Param("example") LogForwardingExample example);

    int updateByPrimaryKeySelective(LogForwarding record);

    int updateByPrimaryKey(LogForwarding record);
}